import connexion
import six

from swagger_server.models.person import Person  # noqa: E501
from swagger_server import util


def get_person_by_id(person_id):  # noqa: E501
    """Find person by ID

    Returns a single person # noqa: E501

    :param person_id: ID of person to return
    :type person_id: str

    :rtype: Person
    """
    return 'do some magic!'


def search_person(first_name, last_name, date_of_birth=None):  # noqa: E501
    """Search for a person

    Returns a list of individuals matching the criteria # noqa: E501

    :param first_name: 
    :type first_name: str
    :param last_name: 
    :type last_name: str
    :param date_of_birth: 
    :type date_of_birth: str

    :rtype: List[Person]
    """
    date_of_birth = util.deserialize_date(date_of_birth)
    return 'do some magic!'
