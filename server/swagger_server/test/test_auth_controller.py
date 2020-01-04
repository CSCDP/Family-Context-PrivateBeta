# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

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
        data = dict(userid='userid_example',
                    password='password_example')
        response = self.client.open(
            '/api/auth/login',
            method='POST',
            data=data,
            content_type='application/x-www-form-urlencoded')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
