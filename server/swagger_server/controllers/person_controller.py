import connexion
import six

from swagger_server.models.person import Person  # noqa: E501
from swagger_server.models.person_query import PersonQuery  # noqa: E501
from swagger_server.models.person_with_relationship import PersonWithRelationship  # noqa: E501
from swagger_server.models.service_detail import ServiceDetail  # noqa: E501
from swagger_server.models.service_summary import ServiceSummary  # noqa: E501
from swagger_server import util


def get_person_by_id(person_id):  # noqa: E501
    """Find person by ID

    Returns a single person # noqa: E501

    :param person_id: ID of person to return
    :type person_id: str

    :rtype: Person
    """
    return 'do some magic!'


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
    return 'do some magic!'


def get_person_service_by_type_and_id(person_id, service_type):  # noqa: E501
    """Find person by ID

    Returns a single person # noqa: E501

    :param person_id: ID of person to return
    :type person_id: str
    :param service_type: Servic type to return
    :type service_type: str

    :rtype: ServiceDetail
    """
    return 'do some magic!'


def get_person_services_by_id(person_id):  # noqa: E501
    """Get a summary of the services a person has interacted with

     # noqa: E501

    :param person_id: ID of person to return
    :type person_id: str

    :rtype: List[ServiceSummary]
    """
    return 'do some magic!'


def search_person(body):  # noqa: E501
    """Search for a person

    Returns a list of individuals matching the criteria # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: List[Person]
    """
    if connexion.request.is_json:
        body = PersonQuery.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def search_person_supported():  # noqa: E501
    """Is person search supported

    Tests whether the person search API is supported by this implementation. A return value of 200 indicates that the operation is supported. A 501 indicates that it is not supported, and any front-end applications should suppress the search functionality.  # noqa: E501


    :rtype: None
    """
    return 'do some magic!'
