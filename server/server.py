#!/usr/bin/env python3

import connexion
import inflection
import os
import glob

from swagger_server import encoder
from connexion.resolver import RestyResolver

import flask

os.environ["APIKEYINFO_FUNC"] = "api.check_cookie_auth"


class MyResolver(RestyResolver):
    def __init__(self, default_module_name, collection_endpoint_name='search'):
        """
        :param default_module_name: Default module name for operations
        :type default_module_name: str
        """
        super().__init__(default_module_name, collection_endpoint_name)

    def resolve_operation_id(self, operation):
        path = operation.path
        path_spec = operation.api.specification.raw["paths"][path]

        tags = None
        for op_spec in path_spec.values():
            if op_spec.get("operationId") == operation.operation_id:
                tags = op_spec.get("tags")
                break

        if not tags:
            tags = ["default"]

        operation_id = inflection.underscore(operation.operation_id)

        return '{}.{}_controller.{}'.format("api", tags[0], operation_id)


def send_static():
    return flask.send_file("static{}".format(flask.request.path))


def main():
    app = connexion.FlaskApp(__name__, specification_dir='..')
    app.app.json_encoder = encoder.JSONEncoder

    @app.route('/')
    def getDefaultPage():
        return flask.send_file('static/index.html')

    # Add explicit rules for each file in the static directory
    for f in [f for f in glob.glob("static/**/*.*", recursive=True)]:
        f = f[6:]
        app.app.add_url_rule(f, f, send_static)

    app.add_api('schema/family-context-api.yaml', arguments={'title': 'Family Context'}, pythonic_params=True, resolver=MyResolver('api'))

    app.run(port=int(os.getenv('PORT', 8080)))


if __name__ == '__main__':
    main()
