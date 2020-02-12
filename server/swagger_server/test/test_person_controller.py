# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.person import Person  # noqa: E501
from swagger_server.models.person_query import PersonQuery  # noqa: E501
from swagger_server.models.person_with_relationship import PersonWithRelationship  # noqa: E501
from swagger_server.models.service_detail import ServiceDetail  # noqa: E501
from swagger_server.models.service_summary import ServiceSummary  # noqa: E501
from swagger_server.test import BaseTestCase


class TestPersonController(BaseTestCase):
    """PersonController integration test stubs"""

    def test_get_person_by_id(self):
        """Test case for get_person_by_id

        Find person by ID
        """
        response = self.client.open(
            '/api/person/detail/{personId}'.format(person_id='person_id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_person_related(self):
        """Test case for get_person_related

        Get related individuals
        """
        response = self.client.open(
            '/api/person/related/{personId}/'.format(person_id='person_id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_person_related_supported(self):
        """Test case for get_person_related_supported

        Is related person supported
        """
        response = self.client.open(
            '/api/person/related/{personId}/'.format(person_id='person_id_example'),
            method='HEAD')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_person_service_by_type_and_id(self):
        """Test case for get_person_service_by_type_and_id

        Find person by ID
        """
        response = self.client.open(
            '/api/person/detail/{personId}/service/{serviceType}'.format(person_id='person_id_example', service_type='service_type_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_person_services_by_id(self):
        """Test case for get_person_services_by_id

        Get a summary of the services a person has interacted with
        """
        response = self.client.open(
            '/api/person/detail/{personId}/service'.format(person_id='person_id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_search_person(self):
        """Test case for search_person

        Search for a person
        """
        body = PersonQuery()
        response = self.client.open(
            '/api/search/person',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_search_person_supported(self):
        """Test case for search_person_supported

        Is person search supported
        """
        response = self.client.open(
            '/api/search/person',
            method='HEAD')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
