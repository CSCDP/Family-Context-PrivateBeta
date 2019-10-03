import connexion
import six

from swagger_server.models.person import Person  # noqa: E501
from swagger_server import util


def get_person_by_id(person_id, sources=None):  # noqa: E501
    """Find person by ID

    Returns a single person # noqa: E501

    :param person_id: ID of person to return
    :type person_id: str
    :param sources: The data source IDs to query
    :type sources: List[str]

    :rtype: Person
    """
    return 'do some magic!'
