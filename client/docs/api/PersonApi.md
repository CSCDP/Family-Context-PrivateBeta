# FamilyContext.PersonApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPersonById**](PersonApi.md#getPersonById) | **GET** /api/person/detail/{personId} | Find person by ID
[**getPersonRelated**](PersonApi.md#getPersonRelated) | **GET** /api/person/related/{personId}/ | Get related individuals
[**getPersonRelatedSupported**](PersonApi.md#getPersonRelatedSupported) | **HEAD** /api/person/related/{personId}/ | Is related person supported
[**getPersonServiceByTypeAndId**](PersonApi.md#getPersonServiceByTypeAndId) | **GET** /api/person/detail/{personId}/service/{serviceType} | Find person by ID
[**getPersonServicesById**](PersonApi.md#getPersonServicesById) | **GET** /api/person/detail/{personId}/service | Get a summary of the services a person has interacted with
[**searchPerson**](PersonApi.md#searchPerson) | **POST** /api/search/person | Search for a person
[**searchPersonSupported**](PersonApi.md#searchPersonSupported) | **HEAD** /api/search/person | Is person search supported

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

<a name="getPersonRelated"></a>
# **getPersonRelated**
> [PersonWithRelationship] getPersonRelated(personId)

Get related individuals

Returns individuals related to the person

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
let personId = "personId_example"; // String | ID of person

apiInstance.getPersonRelated(personId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| ID of person | 

### Return type

[**[PersonWithRelationship]**](PersonWithRelationship.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPersonRelatedSupported"></a>
# **getPersonRelatedSupported**
> getPersonRelatedSupported(personId)

Is related person supported

Tests whether the related person API is supported by this implementation. A return value of 200 indicates that the operation is supported. A 501 indicates that it is not supported, and any front-end applications should suppress the functionality. 

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
let personId = "personId_example"; // String | ID of person

apiInstance.getPersonRelatedSupported(personId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| ID of person | 

### Return type

null (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPersonServiceByTypeAndId"></a>
# **getPersonServiceByTypeAndId**
> ServiceDetail getPersonServiceByTypeAndId(personId, serviceType)

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
let serviceType = "serviceType_example"; // String | Servic type to return

apiInstance.getPersonServiceByTypeAndId(personId, serviceType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| ID of person to return | 
 **serviceType** | **String**| Servic type to return | 

### Return type

[**ServiceDetail**](ServiceDetail.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPersonServicesById"></a>
# **getPersonServicesById**
> [ServiceSummary] getPersonServicesById(personId)

Get a summary of the services a person has interacted with

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

apiInstance.getPersonServicesById(personId).then((data) => {
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

[**[ServiceSummary]**](ServiceSummary.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchPerson"></a>
# **searchPerson**
> [Person] searchPerson(body)

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
let body = new FamilyContext.PersonQuery(); // PersonQuery | 

apiInstance.searchPerson(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PersonQuery**](PersonQuery.md)|  | 

### Return type

[**[Person]**](Person.md)

### Authorization

[cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchPersonSupported"></a>
# **searchPersonSupported**
> searchPersonSupported()

Is person search supported

Tests whether the person search API is supported by this implementation. A return value of 200 indicates that the operation is supported. A 501 indicates that it is not supported, and any front-end applications should suppress the search functionality. 

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
apiInstance.searchPersonSupported().then(() => {
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

