# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
import re  # noqa: F401,E501
from swagger_server import util


class Person(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
<<<<<<< HEAD
    def __init__(self, id: str=None, first_name: str=None, last_name: str=None, date_of_birth: date=None, gender: str=None, address: str=None):  # noqa: E501
=======
    def __init__(self, id: str=None, cms_id: str=None, first_name: str=None, last_name: str=None, date_of_birth: date=None, gender: str=None, address: str=None):  # noqa: E501
>>>>>>> upstream/master
        """Person - a model defined in Swagger

        :param id: The id of this Person.  # noqa: E501
        :type id: str
        :param cms_id: The cms_id of this Person.  # noqa: E501
        :type cms_id: str
        :param first_name: The first_name of this Person.  # noqa: E501
        :type first_name: str
        :param last_name: The last_name of this Person.  # noqa: E501
        :type last_name: str
        :param date_of_birth: The date_of_birth of this Person.  # noqa: E501
        :type date_of_birth: date
        :param gender: The gender of this Person.  # noqa: E501
        :type gender: str
        :param address: The address of this Person.  # noqa: E501
        :type address: str
        """
        self.swagger_types = {
            'id': str,
            'cms_id': str,
            'first_name': str,
            'last_name': str,
            'date_of_birth': date,
            'gender': str,
            'address': str
        }

        self.attribute_map = {
            'id': 'id',
            'cms_id': 'cmsId',
            'first_name': 'firstName',
            'last_name': 'lastName',
            'date_of_birth': 'dateOfBirth',
            'gender': 'gender',
            'address': 'address'
        }
        self._id = id
        self._cms_id = cms_id
        self._first_name = first_name
        self._last_name = last_name
        self._date_of_birth = date_of_birth
        self._gender = gender
        self._address = address

    @classmethod
    def from_dict(cls, dikt) -> 'Person':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Person of this Person.  # noqa: E501
        :rtype: Person
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> str:
        """Gets the id of this Person.


        :return: The id of this Person.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id: str):
        """Sets the id of this Person.


        :param id: The id of this Person.
        :type id: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def cms_id(self) -> str:
        """Gets the cms_id of this Person.


        :return: The cms_id of this Person.
        :rtype: str
        """
        return self._cms_id

    @cms_id.setter
    def cms_id(self, cms_id: str):
        """Sets the cms_id of this Person.


        :param cms_id: The cms_id of this Person.
        :type cms_id: str
        """

        self._cms_id = cms_id

    @property
    def first_name(self) -> str:
        """Gets the first_name of this Person.


        :return: The first_name of this Person.
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name: str):
        """Sets the first_name of this Person.


        :param first_name: The first_name of this Person.
        :type first_name: str
        """
        if first_name is None:
            raise ValueError("Invalid value for `first_name`, must not be `None`")  # noqa: E501

        self._first_name = first_name

    @property
    def last_name(self) -> str:
        """Gets the last_name of this Person.


        :return: The last_name of this Person.
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name: str):
        """Sets the last_name of this Person.


        :param last_name: The last_name of this Person.
        :type last_name: str
        """
        if last_name is None:
            raise ValueError("Invalid value for `last_name`, must not be `None`")  # noqa: E501

        self._last_name = last_name

    @property
    def date_of_birth(self) -> date:
        """Gets the date_of_birth of this Person.


        :return: The date_of_birth of this Person.
        :rtype: date
        """
        return self._date_of_birth

    @date_of_birth.setter
    def date_of_birth(self, date_of_birth: date):
        """Sets the date_of_birth of this Person.


        :param date_of_birth: The date_of_birth of this Person.
        :type date_of_birth: date
        """

        self._date_of_birth = date_of_birth

    @property
    def gender(self) -> str:
        """Gets the gender of this Person.

        The person's gender. Leave blank for 'unknown'.  # noqa: E501

        :return: The gender of this Person.
        :rtype: str
        """
        return self._gender

    @gender.setter
    def gender(self, gender: str):
        """Sets the gender of this Person.

        The person's gender. Leave blank for 'unknown'.  # noqa: E501

        :param gender: The gender of this Person.
        :type gender: str
        """

        self._gender = gender

    @property
    def address(self) -> str:
        """Gets the address of this Person.


        :return: The address of this Person.
        :rtype: str
        """
        return self._address

    @address.setter
    def address(self, address: str):
        """Sets the address of this Person.


        :param address: The address of this Person.
        :type address: str
        """

        self._address = address