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
