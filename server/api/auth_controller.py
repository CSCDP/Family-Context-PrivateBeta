import connexion
import os
import jwt
import time
from werkzeug.exceptions import Unauthorized

from swagger_server.models.body import Body  # noqa: E501

__JWT_ISSUER = os.environ.get("FC_JWT_ISSUER", "--family-context--")
__JWT_LIFETIME_SECONDS = int(os.environ.get("FC_JWT_LIFETIME_SECONDS", 3600*24))
__JWT_ALGORITHM = 'HS256'

__JWT_SECRET = os.environ.get("FC_JWT_SECRET", "!!!TOP_SECRET_VALUE--12321--REPLACE!!!")


def _current_timestamp():
    return int(time.time())


def check_cookie_auth(api_key, required_scopes):
    """
    Although OpenAPI explicitly supports JWT - we don't enforce this - simply use it as a quick way to
    mock the behaviour of a more advanced system
    :param api_key:
    :param required_scopes:
    :return: the decoded security token
    """
    try:
        return jwt.decode(api_key, __JWT_SECRET, algorithms=[__JWT_ALGORITHM])
    except Exception as e:
        Unauthorized.raise_from(e)


def post_auth_login(body=None):
    """
    Although OpenAPI explicitly supports JWT - we don't enforce this - simply use it as a quick way to
    mock the behaviour of a more advanced system
    :param userid:
    :param password:
    :return:
    """
    from flask import make_response, redirect
    if connexion.request.is_json:
        body = Body.from_dict(connexion.request.get_json())  # noqa: E501

    if not body.userid:
        raise Unauthorized("Userid must be provided")

    timestamp = _current_timestamp()
    payload = {
        "iss": __JWT_ISSUER,
        "iat": int(timestamp),
        "exp": int(timestamp + __JWT_LIFETIME_SECONDS),
        "sub": str(body.userid),
    }

    token = jwt.encode(payload, __JWT_SECRET, algorithm=__JWT_ALGORITHM)

    response = make_response(redirect('/api/auth/status'))
    response.set_cookie('FCSESSIONID', token)
    return response

def get_auth_status(user):
    return dict(user=user, status="authenticated")

def post_auth_logout():
    response = make_response(redirect('/api/auth/status'))
    response.set_cookie('FCSESSIONID', 'noop')
    return response, 302