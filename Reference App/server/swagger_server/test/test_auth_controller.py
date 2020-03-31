# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.body import Body  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAuthController(BaseTestCase):
    """AuthController integration test stubs"""

    def test_get_auth_status(self):
        """Test case for get_auth_status

        Get authentication status
        """
        response = self.client.open(
            '/api/auth/status',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_post_auth_login(self):
        """Test case for post_auth_login

        Submit authentication details
        """
        body = Body()
        response = self.client.open(
            '/api/auth/login',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_post_auth_logout(self):
        """Test case for post_auth_logout

        Logout of the service
        """
        response = self.client.open(
            '/api/auth/logout',
            method='POST')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
