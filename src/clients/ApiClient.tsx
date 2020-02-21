import LoginDetails from "../models/LoginDetails";

class ApiClient {
    private baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    setBaseUrl(url: string) {
        this.baseUrl = url;
    }

    async login(loginDetails: LoginDetails) {
        var apiUrl = "/api/auth/login"

        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();

            request.open('POST', `${this.baseUrl}${apiUrl}`, true);

            request.withCredentials = true;
            request.setRequestHeader('Content-Type', 'application/json');

            request.onload = (event) => {
                var response = JSON.parse(request.response)
                resolve(response && response.status === "authenticated")
            }

            request.onerror = () => {
                reject()
            }

            request.send(JSON.stringify(loginDetails))
        })
    }

    async isLoggedIn() {
        var apiUrl = "/api/auth/status"
        try {   
            var response = await this.getRequest(apiUrl)
            return (response.status === 200)
        } catch {
            return false
        }
    }

    async getRequest(relativePath: string) {
        return fetch(`${this.baseUrl}${relativePath}`, {
            credentials: 'include'
        })
    }
}

export default ApiClient