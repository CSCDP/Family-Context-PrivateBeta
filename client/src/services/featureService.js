import { PersonApi } from "../api"

const api = new PersonApi()

export async function searchPersonSupported() {
    try {
        await api.searchPersonSupported();
        return true;
    } catch {
        return false;
    }
}