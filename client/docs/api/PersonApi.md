# FamilyContext.PersonApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPersonById**](PersonApi.md#getPersonById) | **GET** /api/person/{personId} | Find person by ID
[**searchPerson**](PersonApi.md#searchPerson) | **GET** /api/search/person | Search for a person

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

<a name="searchPerson"></a>
# **searchPerson**
> [Person] searchPerson(firstName, lastName, opts)

Search for a person

Returns a list of individuals matching the criteria

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
let firstName = "firstName_example"; // String | 
let lastName = "lastName_example"; // String | 
let opts = { 
  'dateOfBirth': new Date("2013-10-20") // Date | 
};
apiInstance.searchPerson(firstName, lastName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**|  | 
 **lastName** | **String**|  | 
 **dateOfBirth** | **Date**|  | [optional] 

### Return type

[**[Person]**](Person.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

