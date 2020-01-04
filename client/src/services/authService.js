import { AuthApi } from "../api"

const api = new AuthApi()

export async function authenticate(userid, password) {
    try {
        return await api.postAuthLogin({userid, password});
    } catch {
        return;
    }
}

export async function checkState() {
    try {
        return await api.getAuthStatus();
    } catch {
        return;
    }
}

export async function signOut() {
    delete_cookie("FCSESSIONID")
}

function delete_cookie( name ) {
    document.cookie = name + '=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
}
