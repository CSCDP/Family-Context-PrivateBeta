import connexion
from connexion.spec import OpenAPISpecification

from data_access.csv import CsvSampleDataAccess
from swagger_server.models import PersonQuery

data_access = CsvSampleDataAccess()


def get_person_by_id(person_id):
    return data_access.get_person_by_id(person_id)


def get_person_services_by_id(person_id):
    return data_access.get_person_services_by_id(person_id)


def get_person_service_by_type_and_id(person_id, service_type):
    return data_access.get_person_service_by_type_and_id(person_id, service_type)


def search_person(body):  # noqa: E501
    """Search for a person

    Returns a list of individuals matching the criteria # noqa: E501

    :param body:
    :type body: dict | bytes

    :rtype: List[Person]
    """
    if connexion.request.is_json:
        body = PersonQuery.from_dict(connexion.request.get_json())  # noqa: E501
    return data_access.search_persons()

