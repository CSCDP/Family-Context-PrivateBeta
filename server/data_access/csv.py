import csv
import os

import inflection

from swagger_server.models import Person, Police, PoliceOffences, School, AdultSocialCare, Housing, Contact


class CsvSampleDataAccess:

    def __init__(self, data_dir="../data"):
        self.__data__ = CsvSampleDataAccess.__read_data__(data_dir)

    def get_person_by_id(self, person_id):
        return self.__data__[person_id]

    @staticmethod
    def __read_data__(data_dir):

        data = CsvSampleDataAccess.__parse_csv__(data_dir, 'person.csv')

        persons = dict();
        for person in data:
            persons[person['id']] = Person(**person)
            persons[person['id']].service_data = dict()

        data = CsvSampleDataAccess.__parse_csv__(data_dir, 'police.csv')
        for policedata in data:
            person_id = policedata["person_id"]
            del policedata["person_id"]
            CsvSampleDataAccess.__parse_contact__(policedata)
            police = Police(**policedata, offences=[])
            persons[person_id].service_data["POLICE"] = police

        data = CsvSampleDataAccess.__parse_csv__(data_dir, 'police_offence.csv')
        for policedata in data:
            person_id = policedata["person_id"]
            del policedata["person_id"]
            police = PoliceOffences(**policedata)
            persons[person_id].service_data["POLICE"].offences.append(police)

        data = CsvSampleDataAccess.__parse_csv__(data_dir, 'school.csv')
        for sectiondata in data:
            person_id = sectiondata["person_id"]
            del sectiondata["person_id"]
            CsvSampleDataAccess.__parse_contact__(sectiondata)
            section = School(**sectiondata)
            persons[person_id].service_data["SCHOOL"] = section

        data = CsvSampleDataAccess.__parse_csv__(data_dir, 'adult_social_care.csv')
        for sectiondata in data:
            person_id = sectiondata["person_id"]
            del sectiondata["person_id"]
            CsvSampleDataAccess.__parse_contact__(sectiondata)
            section = AdultSocialCare(**sectiondata)
            persons[person_id].service_data["ASC"] = section

        data = CsvSampleDataAccess.__parse_csv__(data_dir, 'housing.csv')
        for sectiondata in data:
            person_id = sectiondata["person_id"]
            del sectiondata["person_id"]
            CsvSampleDataAccess.__parse_contact__(sectiondata)

            section = Housing(**sectiondata)
            persons[person_id].service_data["HOUSING"] = section

        return persons

    @staticmethod
    def __parse_csv__(data_dir, filename):
        dirname = os.path.dirname(__file__)
        filename = os.path.join(dirname, data_dir, filename)

        rows = []
        with open(filename) as csvfile:
            reader = list(csv.reader(csvfile))

            header = reader[0]

            for row in reader[1:]:
                row_obj = dict()
                for ix, name in enumerate(header):
                    name = inflection.underscore(name.strip())
                    value = row[ix] if ix < len(row) else None
                    row_obj[name] = value
                rows.append(row_obj)

        return rows

    @staticmethod
    def __parse_contact__(row):
        mapping = dict(name="contact_name", email="contact_email", phone="contact_phone", role="contact_role")
        newObj = dict()
        for newKey, oldKey in mapping.items():
            if oldKey in row:
                newObj[newKey] = row[oldKey]
                del row[oldKey]
        row["contact"] = Contact(**newObj)