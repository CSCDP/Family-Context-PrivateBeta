# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.person import Person  # noqa: F401,E501
import re  # noqa: F401,E501
from swagger_server import util


class PersonWithRelationship(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: str=None, first_name: str=None, last_name: str=None, date_of_birth: date=None, gender: str=None, ethnicity: str=None, address: str=None, relationship: str=None, relationship_to_id: str=None):  # noqa: E501
        """PersonWithRelationship - a model defined in Swagger

        :param id: The id of this PersonWithRelationship.  # noqa: E501
        :type id: str
        :param first_name: The first_name of this PersonWithRelationship.  # noqa: E501
        :type first_name: str
        :param last_name: The last_name of this PersonWithRelationship.  # noqa: E501
        :type last_name: str
        :param date_of_birth: The date_of_birth of this PersonWithRelationship.  # noqa: E501
        :type date_of_birth: date
        :param gender: The gender of this PersonWithRelationship.  # noqa: E501
        :type gender: str
        :param ethnicity: The ethnicity of this PersonWithRelationship.  # noqa: E501
        :type ethnicity: str
        :param address: The address of this PersonWithRelationship.  # noqa: E501
        :type address: str
        :param relationship: The relationship of this PersonWithRelationship.  # noqa: E501
        :type relationship: str
        :param relationship_to_id: The relationship_to_id of this PersonWithRelationship.  # noqa: E501
        :type relationship_to_id: str
        """
        self.swagger_types = {
            'id': str,
            'first_name': str,
            'last_name': str,
            'date_of_birth': date,
            'gender': str,
            'ethnicity': str,
            'address': str,
            'relationship': str,
            'relationship_to_id': str
        }

        self.attribute_map = {
            'id': 'id',
            'first_name': 'firstName',
            'last_name': 'lastName',
            'date_of_birth': 'dateOfBirth',
            'gender': 'gender',
            'ethnicity': 'ethnicity',
            'address': 'address',
            'relationship': 'relationship',
            'relationship_to_id': 'relationshipToId'
        }
        self._id = id
        self._first_name = first_name
        self._last_name = last_name
        self._date_of_birth = date_of_birth
        self._gender = gender
        self._ethnicity = ethnicity
        self._address = address
        self._relationship = relationship
        self._relationship_to_id = relationship_to_id

    @classmethod
    def from_dict(cls, dikt) -> 'PersonWithRelationship':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The PersonWithRelationship of this PersonWithRelationship.  # noqa: E501
        :rtype: PersonWithRelationship
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> str:
        """Gets the id of this PersonWithRelationship.


        :return: The id of this PersonWithRelationship.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id: str):
        """Sets the id of this PersonWithRelationship.


        :param id: The id of this PersonWithRelationship.
        :type id: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def first_name(self) -> str:
        """Gets the first_name of this PersonWithRelationship.


        :return: The first_name of this PersonWithRelationship.
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name: str):
        """Sets the first_name of this PersonWithRelationship.


        :param first_name: The first_name of this PersonWithRelationship.
        :type first_name: str
        """
        if first_name is None:
            raise ValueError("Invalid value for `first_name`, must not be `None`")  # noqa: E501

        self._first_name = first_name

    @property
    def last_name(self) -> str:
        """Gets the last_name of this PersonWithRelationship.


        :return: The last_name of this PersonWithRelationship.
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name: str):
        """Sets the last_name of this PersonWithRelationship.


        :param last_name: The last_name of this PersonWithRelationship.
        :type last_name: str
        """
        if last_name is None:
            raise ValueError("Invalid value for `last_name`, must not be `None`")  # noqa: E501

        self._last_name = last_name

    @property
    def date_of_birth(self) -> date:
        """Gets the date_of_birth of this PersonWithRelationship.


        :return: The date_of_birth of this PersonWithRelationship.
        :rtype: date
        """
        return self._date_of_birth

    @date_of_birth.setter
    def date_of_birth(self, date_of_birth: date):
        """Sets the date_of_birth of this PersonWithRelationship.


        :param date_of_birth: The date_of_birth of this PersonWithRelationship.
        :type date_of_birth: date
        """

        self._date_of_birth = date_of_birth

    @property
    def gender(self) -> str:
        """Gets the gender of this PersonWithRelationship.

        The person's gender. Leave blank for 'unknown'.  # noqa: E501

        :return: The gender of this PersonWithRelationship.
        :rtype: str
        """
        return self._gender

    @gender.setter
    def gender(self, gender: str):
        """Sets the gender of this PersonWithRelationship.

        The person's gender. Leave blank for 'unknown'.  # noqa: E501

        :param gender: The gender of this PersonWithRelationship.
        :type gender: str
        """

        self._gender = gender

    @property
    def ethnicity(self) -> str:
        """Gets the ethnicity of this PersonWithRelationship.


        :return: The ethnicity of this PersonWithRelationship.
        :rtype: str
        """
        return self._ethnicity

    @ethnicity.setter
    def ethnicity(self, ethnicity: str):
        """Sets the ethnicity of this PersonWithRelationship.


        :param ethnicity: The ethnicity of this PersonWithRelationship.
        :type ethnicity: str
        """

        self._ethnicity = ethnicity

    @property
    def address(self) -> str:
        """Gets the address of this PersonWithRelationship.


        :return: The address of this PersonWithRelationship.
        :rtype: str
        """
        return self._address

    @address.setter
    def address(self, address: str):
        """Sets the address of this PersonWithRelationship.


        :param address: The address of this PersonWithRelationship.
        :type address: str
        """

        self._address = address

    @property
    def relationship(self) -> str:
        """Gets the relationship of this PersonWithRelationship.

        A description of the relationship.  # noqa: E501

        :return: The relationship of this PersonWithRelationship.
        :rtype: str
        """
        return self._relationship

    @relationship.setter
    def relationship(self, relationship: str):
        """Sets the relationship of this PersonWithRelationship.

        A description of the relationship.  # noqa: E501

        :param relationship: The relationship of this PersonWithRelationship.
        :type relationship: str
        """

        self._relationship = relationship

    @property
    def relationship_to_id(self) -> str:
        """Gets the relationship_to_id of this PersonWithRelationship.

        The ID of the individual this relationship refers to  # noqa: E501

        :return: The relationship_to_id of this PersonWithRelationship.
        :rtype: str
        """
        return self._relationship_to_id

    @relationship_to_id.setter
    def relationship_to_id(self, relationship_to_id: str):
        """Sets the relationship_to_id of this PersonWithRelationship.

        The ID of the individual this relationship refers to  # noqa: E501

        :param relationship_to_id: The relationship_to_id of this PersonWithRelationship.
        :type relationship_to_id: str
        """

        self._relationship_to_id = relationship_to_id
