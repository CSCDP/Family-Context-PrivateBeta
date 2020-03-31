import copy
import csv
import json
import os
import inflection
from datetime import datetime
from connexion.spec import OpenAPISpecification

from swagger_server.models import ServiceSummary, Person, Police, OffenceSummary, School, AdultSocialCare, Housing, \
    Contact, ServiceDetail, OffenceRecordsFound

SCHEMA_ROOT = "http://www.sfdl.org.uk/schemas/fc/0.0.1#"
SCHEMA_LOCAL_PREFIX = "#/components/schemas/"
SCHEMA = OpenAPISpecification.from_file('../schema/family-context-api.yaml')
SCHEMA_MAP = {k: v for k, v in SCHEMA.raw["components"]["schemas"].items()}


class CsvSampleDataAccess:

    def __init__(self, data_dir="../data"):
        self.__data_dir = os.path.join(os.path.dirname(__file__), data_dir)
        self.__persons = self.__read_persons()
        self.__services, self.__schemas = self.__read_services()
        self.__service_data = dict()
        for func in [self.__read_service_police,
                     self.__read_service_school,
                     self.__read_service_housing,
                     self.__read_service_asc]:
            values = func()
            self.__service_data.update(values)

    def search_persons(self, person_query):
        return list(filter(lambda p: self.__search_filter(p, person_query), self.__persons.values()))

    def get_person_by_id(self, person_id):
        return self.__persons[person_id]

    def get_person_services_by_id(self, person_id):
        # Make sure person exists
        person = self.__persons[person_id]

        today = datetime.today()
        born = datetime.strptime(person.date_of_birth, '%d/%m/%Y').date()
        person_age = today.year - born.year - ((today.month, today.day) < (born.month, born.day))

        services = []
        # Loop over each service
        for service_id, service in self.__services.items():
            service = copy.deepcopy(service)
            service_data = self.__service_data.get((person_id, service_id))

            service.records_available = True if service_data else False

            if self.__should_show_service_for_age(service.id, person_age):
                services.append(service)

        return services

    def get_person_service_by_type_and_id(self, person_id, service_id):
        # Make sure person exists
        person = self.__persons[person_id]
        service_schema = self.__schemas[service_id]
        service_summary = self.__services[service_id]
        service_data = self.__service_data.get((person_id, service_id))

        details = ServiceDetail()
        details.summary = service_summary
        details.schema = service_schema
        details.data = service_data

        return details

    def __should_show_service_for_age(self, service_name, age):
        if service_name == 'AdultSocialCare':
            return age >= 15
        if service_name == 'Housing':
            return age >= 16
        if service_name == 'School':
            return age >= 4 and age <= 20
        if service_name == 'Police':
            return age >= 18

    def __search_filter(self, person, person_query):
        if (person.first_name == person_query.first_name and person.last_name == person_query.last_name):
            if (person_query.date_of_birth is None \
            or person_query.date_of_birth == datetime.strptime(person.date_of_birth, '%d/%m/%Y').date()):
                return True
        return False

    def __read_persons(self, filename="person.csv"):
        data = self.__parse_csv(filename)
        persons = dict()
        for person in data:
            persons[person['id']] = Person(**person)
        return persons

    def __read_services(self, filename="datasources.csv"):
        data = self.__parse_csv(filename)

        summaries = dict()
        schemas = dict()



        for item in data:
            id = item["id"]
            schema_ref = item.pop("schema_ref")
            schema_data = item.pop("schema_data")

            if schema_ref:
                schemas[id] = self.__load_schema(schema_ref)
            else:
                schemas[id] = json.loads(schema_data)

            summary = ServiceSummary(**item)
            summaries[id] = summary

        return summaries, schemas



    def __read_service_police(self, filename="police.csv", offencefilename="police_offence.csv"):
        service_id = "Police"
        values = self.__read_data(filename, service_id, Police)
        data = self.__parse_csv(offencefilename)
        for item in data:
            person_id = item["person_id"]
            del item["person_id"]
            offence = OffenceSummary(**item)

            police = values[(person_id, service_id)]
            if not police.safe_guarding_offences:
                police.safe_guarding_offences = []
            police.safe_guarding_offences.append(offence)

            records = OffenceRecordsFound("Yes")
            police.non_safe_guarding_offences = [records]
        return values

    def __read_service_school(self, filename="school.csv"):
        return self.__read_data(filename, "School", School)

    def __read_service_housing(self, filename="housing.csv"):
        return self.__read_data(filename, "Housing", Housing)

    def __read_service_asc(self, filename="adult_social_care.csv"):
        return self.__read_data(filename, "Adult Social Care", AdultSocialCare, "AdultSocialCare")

    def __read_data(self, filename, service_name, service_type, service_id=None):
        if not service_id:
            service_id = service_name
        values = dict()
        data = self.__parse_csv(filename)
        for item in data:
            person_id = item.pop("person_id")
            CsvSampleDataAccess.__parse_contact(item)
            item_object = service_type(**item)
            values[(person_id, service_id)] = item_object
        return values

    def __parse_csv(self, filename):
        filename = os.path.join(self.__data_dir, filename)

        rows = []
        with open(filename) as csvfile:
            reader = list(csv.reader(csvfile))

            header = reader[0]

            for row in reader[1:]:
                row_obj = dict()
                for ix, name in enumerate(header):
                    name = name.strip()
                    name = name.replace(" ", "")
                    name = inflection.underscore(name)
                    value = row[ix] if ix < len(row) else None
                    if isinstance(value, str):
                        value = value.strip()
                    row_obj[name] = value
                rows.append(row_obj)

        return rows

    @staticmethod
    def __parse_contact(row, field="contact"):
        mapping = dict(name="contact_name", email="contact_email", phone="contact_phone", role="contact_role")
        new_obj = dict()
        for new_key, old_key in mapping.items():
            if old_key in row:
                new_obj[new_key] = row[old_key]
                del row[old_key]
        row[field] = Contact(**new_obj)

    def __load_schema(self, schema_ref):
        if schema_ref.startswith(SCHEMA_LOCAL_PREFIX):
            schema_key = schema_ref[len(SCHEMA_LOCAL_PREFIX):]
        elif schema_ref.startswith(SCHEMA_ROOT):
            schema_key = schema_ref[len(SCHEMA_ROOT):]
        else:
            raise ValueError("Only built-in schema reference supported for now. {} not supported.".format(schema_ref))

        item = SCHEMA_MAP[schema_key]
        prop_seq = 0
        properties = item.get("properties")
        if properties:
            for p_name, p_value in properties.items():
                prop_seq += 1
                p_value["x-item-seq"] = prop_seq

                ref = p_value.get("$ref")
                if ref:
                    ref_value = copy.deepcopy(self.__load_schema(ref))
                    ref_value["x-item-seq"] = prop_seq
                    ref_value.setdefault("title", p_value.get("title"))
                    properties[p_name] = ref_value

                if p_value.get("type") == "array":
                    items = p_value["items"]
                    ref = items.pop("$ref")
                    if ref:
                        ref_value = copy.deepcopy(self.__load_schema(ref))
                        items.update(**ref_value)

            item["x-ref"] = SCHEMA_ROOT + schema_key
            return item




