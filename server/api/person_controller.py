from data_access.csv import CsvSampleDataAccess

data_access = CsvSampleDataAccess()


def get_person_by_id(person_id):
    return data_access.get_person_by_id(person_id)
