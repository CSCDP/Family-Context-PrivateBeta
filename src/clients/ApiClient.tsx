import LoginDetails from "../models/LoginDetails";
import PersonDetails from "../models/PersonDetails";
import ServiceInvolvementDetailsSummary from "../models/ServiceInvolvementDetailsSummary";
import ServiceDetail from "../models/ServiceDetail";
import SearchDetails from "../models/SearchDetails";
import PersonRelationshipDetails from "../models/PersonRelationshipDetails";
import SearchResponse from "../models/SearchResponse";
import LoginStatus from "../models/LoginStatus";

class ApiClient {
  private baseUrl: string
  private authenticationCallback: (newStatus: LoginStatus) => void

  constructor(baseUrl: string, authenticationCallback: (newStatus: LoginStatus) => void) {
    this.baseUrl = baseUrl;
    this.authenticationCallback = authenticationCallback;
  }

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  /*
   * The login method cannot use the 'fetch' api because it does not allow cross origin requests to set
   * cookies. We use the XMLHttpRequest for logging in to get round this limitation.
   */
  async login(loginDetails: LoginDetails): Promise<LoginStatus> {
    var loginPath = "/auth/login"

    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();

      request.open('POST', `${this.baseUrl}${loginPath}`, true);

      request.withCredentials = true;
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('Cache-Control', 'no-cache')

      request.onload = (event) => {
        switch (request.status) {
          case 200:
            this.authenticationCallback(LoginStatus.Authorized);
            resolve(LoginStatus.Authorized);
            break;
          
          case 401:
            this.authenticationCallback(LoginStatus.Unauthenticated);
            resolve(LoginStatus.Unauthenticated);
            break;

          case 403:
            this.authenticationCallback(LoginStatus.Forbidden);
            resolve(LoginStatus.Forbidden);
            break;
          
          default:
            this.authenticationCallback(LoginStatus.Unknown);
            resolve(LoginStatus.Unknown);
        }
      }

      request.onerror = () => {
        reject()
      }

      request.send(JSON.stringify(loginDetails))
    })
  }

  async logout(): Promise<boolean> {
    var logoutPath = "/auth/logout"
    var response = await this.postJsonRequest(logoutPath, "");

    var success = response.ok || response.status === 401;

    if (success) {
      this.authenticationCallback(LoginStatus.Unauthenticated)
    }

    return success
  }

  async isAuthenticated(): Promise<boolean> {
    var statusPath = "/auth/status"
    try {
      var response = await this.getRequest(statusPath)
      return (response.status === 200)
    } catch {
      return false
    }
  }

  async getPerson(personId: string, idType: string = "fc"): Promise<RequestResult<PersonDetails>> {
    let personDetailsPath = `/person/detail/${idType}:${personId}`;
    let response = await this.getRequest(personDetailsPath);

    let result: RequestResult<PersonDetails> = {
      statusCode: response.status,
      success: response.ok
    }

    if (response.ok) {
      result.data = await response.json();
    }

    return result;

  }

  async getServiceSummaries(personId: string): Promise<RequestResult<ServiceInvolvementDetailsSummary[]>> {
    let personDetailsPath = "/person/detail/" + personId + "/service";
    let response = await this.getRequest(personDetailsPath);

    return {
      statusCode: response.status,
      success: response.ok,
      data: await response.json()
    };
  }

  async getServiceDetail(personId: string, serviceId: string): Promise<RequestResult<ServiceDetail>> {
    let serviceDetailsPath = "/person/detail/" + personId + "/service/" + serviceId;
    let response = await this.getRequest(serviceDetailsPath);
    
    let jsonString = (await response.text()).replace(/x-ref/g, "xRef").replace(/x-item-seq/g, "xItemSeq");

    return {
      statusCode: response.status,
      success: response.ok,
      data: JSON.parse(jsonString)
    };
  }

  async isSearchApiSupported(): Promise<RequestResult<boolean>> {
    let searchPath = "/search/person";
    let response = await this.headRequest(searchPath)

    return {
        statusCode: response.status,
        success: response.ok
    }
}

  async isRelatedIndividualsSupported(personId: string): Promise<RequestResult<boolean>> {
    let relatedIndividualsPath = "/person/related/" + personId;
    let response = await this.headRequest(relatedIndividualsPath);

    return {
        statusCode: response.status,
        success: response.ok || response.status === 501,
        data: response.status === 200,
    }
}

async getRelatedIndividuals(personId: string): Promise<RequestResult<PersonRelationshipDetails[]>> {
    let relatedIndividualsPath = "/person/related/" + personId;
    let response = await this.getRequest(relatedIndividualsPath);

    return {
        statusCode: response.status,
        success: response.ok,
        data: await response.json()
    }
}

  async searchPerson(search: SearchDetails): Promise<RequestResult<SearchResponse>> {
    let searchPath = "/search/person";
    let response = await this.postJsonRequest(searchPath, JSON.stringify(search))

    return {
      statusCode: response.status,
      success: response.ok,
      data: await response.json()
    }
  }

  async postJsonRequest(relativePath: string, body: string): Promise<Response> {
    return fetch(`${this.baseUrl}${relativePath}`, {
      method: "POST",
      credentials: 'include',
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status === 401) {
        this.authenticationCallback(LoginStatus.Unauthenticated);
      } else if (response.status === 403) {
        this.authenticationCallback(LoginStatus.Forbidden);
      }
      return response;
    });
  }

  async getRequest(relativePath: string): Promise<Response> {
    return fetch(`${this.baseUrl}${relativePath}`, {
      credentials: 'include'
    }).then(response => {
      if (response.status === 401) {
        this.authenticationCallback(LoginStatus.Unauthenticated);
      } else if (response.status === 403) {
        this.authenticationCallback(LoginStatus.Forbidden);
      }
      return response;
    });
  }

    async headRequest(relativePath: string): Promise<Response> {
        return fetch(`${this.baseUrl}${relativePath}`, {
            credentials: 'include',
            method: 'HEAD'
        }).then(response =>
            {
                if (response.status === 401)
                {
                  this.authenticationCallback(LoginStatus.Unauthenticated);
                } else if (response.status === 403) {
                  this.authenticationCallback(LoginStatus.Forbidden);
                }
                return response;
            });
    }
}

export interface RequestResult<T> {
  statusCode: number,
  data?: T,
  success: boolean,
  errorMessage?: string
}

export default ApiClient