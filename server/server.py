#!/usr/bin/env python3

import connexion
import inflection

from swagger_server import encoder
from connexion.resolver import RestyResolver


class MyResolver(RestyResolver):
    def __init__(self, default_module_name, collection_endpoint_name='search'):
        """
        :param default_module_name: Default module name for operations
        :type default_module_name: str
        """
        super().__init__(self)
        print("INIT")

    def resolve_operation_id(self, operation):
        operation_id = inflection.underscore(operation.operation_id)
        return '{}.{}'.format("api.person", operation_id)


def main():
    app = connexion.App(__name__, specification_dir='..')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('family-context-api.yaml', arguments={'title': 'Family Context'}, pythonic_params=True, resolver=MyResolver('api'))
    app.run(port=8080)


if __name__ == '__main__':
    main()
