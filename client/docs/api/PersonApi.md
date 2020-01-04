# FamilyContext.PersonApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPersonById**](PersonApi.md#getPersonById) | **GET** /api/person/{personId} | Find person by ID

<a name="getPersonById"></a>
# **getPersonById**
> Person getPersonById(personId)

Find person by ID

Returns a single person

### Example
```javascript
import FamilyContext from 'family_context';
let defaultClient = FamilyContext.ApiClient.instance;

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new FamilyContext.PersonApi();
let personId = "personId_example"; // String | ID of person to return

apiInstance.getPersonById(personId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| ID of person to return | 

### Return type

[**Person**](Person.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

