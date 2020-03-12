# FamilyContext.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthStatus**](AuthApi.md#getAuthStatus) | **GET** /api/auth/status | Get authentication status
[**postAuthLogin**](AuthApi.md#postAuthLogin) | **POST** /api/auth/login | Submit authentication details
[**postAuthLogout**](AuthApi.md#postAuthLogout) | **POST** /api/auth/logout | Logout of the service

<a name="getAuthStatus"></a>
# **getAuthStatus**
> InlineResponse200 getAuthStatus()

Get authentication status

Checks to see if there is currently an active authentication session. Returns the name of the current credentials if known. 

### Example
```javascript
import FamilyContext from 'family_context';
let defaultClient = FamilyContext.ApiClient.instance;

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new FamilyContext.AuthApi();
apiInstance.getAuthStatus().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postAuthLogin"></a>
# **postAuthLogin**
> postAuthLogin()

Submit authentication details

TODO: 

### Example
```javascript
import FamilyContext from 'family_context';

let apiInstance = new FamilyContext.AuthApi();

apiInstance.postAuthLogin().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postAuthLogout"></a>
# **postAuthLogout**
> postAuthLogout()

Logout of the service

TODO: 

### Example
```javascript
import FamilyContext from 'family_context';
let defaultClient = FamilyContext.ApiClient.instance;

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new FamilyContext.AuthApi();
apiInstance.postAuthLogout().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

