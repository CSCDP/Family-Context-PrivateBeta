# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.pagination_details import (
    PaginationDetails,
)  # noqa: F401,E501
from swagger_server import util


class PersonQuery(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(
        self,
        first_name: str = None,
        last_name: str = None,
        date_of_birth: date = None,
        pagination_details: PaginationDetails = None,
    ):  # noqa: E501
        """PersonQuery - a model defined in Swagger

        :param first_name: The first_name of this PersonQuery.  # noqa: E501
        :type first_name: str
        :param last_name: The last_name of this PersonQuery.  # noqa: E501
        :type last_name: str
        :param date_of_birth: The date_of_birth of this PersonQuery.  # noqa: E501
        :type date_of_birth: date
        :param pagination_details: The pagination_details of this PersonQuery.  # noqa: E501
        :type pagination_details: PaginationDetails
        """
        self.swagger_types = {
            "first_name": str,
            "last_name": str,
            "date_of_birth": date,
            "pagination_details": PaginationDetails,
        }

        self.attribute_map = {
            "first_name": "firstName",
            "last_name": "lastName",
            "date_of_birth": "dateOfBirth",
            "pagination_details": "paginationDetails",
        }
        self._first_name = first_name
        self._last_name = last_name
        self._date_of_birth = date_of_birth
        self._pagination_details = pagination_details

    @classmethod
    def from_dict(cls, dikt) -> "PersonQuery":
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The PersonQuery of this PersonQuery.  # noqa: E501
        :rtype: PersonQuery
        """
        return util.deserialize_model(dikt, cls)

    @property
    def first_name(self) -> str:
        """Gets the first_name of this PersonQuery.


        :return: The first_name of this PersonQuery.
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name: str):
        """Sets the first_name of this PersonQuery.


        :param first_name: The first_name of this PersonQuery.
        :type first_name: str
        """
        if first_name is None:
            raise ValueError(
                "Invalid value for `first_name`, must not be `None`"
            )  # noqa: E501

        self._first_name = first_name

    @property
    def last_name(self) -> str:
        """Gets the last_name of this PersonQuery.


        :return: The last_name of this PersonQuery.
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name: str):
        """Sets the last_name of this PersonQuery.


        :param last_name: The last_name of this PersonQuery.
        :type last_name: str
        """
        if last_name is None:
            raise ValueError(
                "Invalid value for `last_name`, must not be `None`"
            )  # noqa: E501

        self._last_name = last_name

    @property
    def date_of_birth(self) -> date:
        """Gets the date_of_birth of this PersonQuery.


        :return: The date_of_birth of this PersonQuery.
        :rtype: date
        """
        return self._date_of_birth

    @date_of_birth.setter
    def date_of_birth(self, date_of_birth: date):
        """Sets the date_of_birth of this PersonQuery.


        :param date_of_birth: The date_of_birth of this PersonQuery.
        :type date_of_birth: date
        """

        self._date_of_birth = date_of_birth

    @property
    def pagination_details(self) -> PaginationDetails:
        """Gets the pagination_details of this PersonQuery.


        :return: The pagination_details of this PersonQuery.
        :rtype: PaginationDetails
        """
        return self._pagination_details

    @pagination_details.setter
    def pagination_details(self, pagination_details: PaginationDetails):
        """Sets the pagination_details of this PersonQuery.


        :param pagination_details: The pagination_details of this PersonQuery.
        :type pagination_details: PaginationDetails
        """

        self._pagination_details = pagination_details
