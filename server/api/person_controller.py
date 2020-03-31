import connexion
from data_access.csv import CsvSampleDataAccess
from swagger_server.models import PersonQuery
from flask import session


data_access = CsvSampleDataAccess()


def get_person_by_id(person_id):
    return data_access.get_person_by_id(person_id)


def get_person_related(person_id):  # noqa: E501
    """Get related individuals

    Returns individuals related to the person # noqa: E501

    :param person_id: ID of person
    :type person_id: str

    :rtype: List[PersonWithRelationship]
    """
    return 'do some magic!'


def get_person_related_supported(person_id):  # noqa: E501
    """Is related person supported

    Tests whether the related person API is supported by this implementation. A return value of 200 indicates that the operation is supported. A 501 indicates that it is not supported, and any front-end applications should suppress the functionality.  # noqa: E501

    :param person_id: ID of person
    :type person_id: str

    :rtype: None
    """
    return 'Not Implemented', 501


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
    return data_access.search_persons(body)


<<<<<<< HEAD

=======
>>>>>>> upstream/master
def search_person_supported():  # noqa: E501
    """Is person search supported

    Tests whether the person search API is supported by this implementation. A return value of 200 indicates that the operation is supported. A 501 indicates that it is not supported, and any front-end applications should suppress the search functionality.  # noqa: E501


    :rtype: None
    """
    print(session.get("person_search"))
    if session.get("person_search", True):
        return "OK", 200
    else:
        return 'Not Implemented', 501
