from data_access.csv import CsvSampleDataAccess
from swagger_server import util

data_access = CsvSampleDataAccess()


def get_person_by_id(person_id):
    return data_access.get_person_by_id(person_id)


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

    # date_of_birth = util.deserialize_date(date_of_birth)
    return list(data_access.__data__.values())
