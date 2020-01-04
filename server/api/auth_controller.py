def post_auth_login(userid=None, password=None):
    from flask import make_response, redirect

    response = make_response(redirect('/api/auth/status'))
    response.set_cookie('FCSESSIONID', "OK")
    return response


def get_auth_status(user):  # noqa: E501
    return "OK"
