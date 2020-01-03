# FamilyContext.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPersonById**](DefaultApi.md#getPersonById) | **GET** /person/{personId} | Find person by ID

<a name="getPersonById"></a>
# **getPersonById**
> Person getPersonById(personId, opts)

Find person by ID

Returns a single person

### Example
```javascript
import FamilyContext from 'family_context';

let apiInstance = new FamilyContext.DefaultApi();
let personId = "personId_example"; // String | ID of person to return
let opts = { 
  'sources': ["sources_example"] // [String] | The data source IDs to query
};
apiInstance.getPersonById(personId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| ID of person to return | 
 **sources** | [**[String]**](String.md)| The data source IDs to query | [optional] 

### Return type

[**Person**](Person.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

