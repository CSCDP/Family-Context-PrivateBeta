/**
 * Family Context
 * This is the *DRAFT / WORK IN PROGRESS* API definition for Family Context. This document is currently undergoing rapid change and should not be used as basis for implementation without discussing with the project team. 
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Person model module.
* @module model/Person
* @version 0.0.1
*/
export default class Person {
    /**
    * Constructs a new <code>Person</code>.
    * @alias module:model/Person
    * @class
    * @param id {String} 
    * @param firstName {String} 
    * @param lastName {String} 
    */

    constructor(id, firstName, lastName) {
                this['id'] = id;
        this['firstName'] = firstName;
        this['lastName'] = lastName;
        
    }

    /**
    * Constructs a <code>Person</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Person} obj Optional instance to populate.
    * @return {module:model/Person} The populated <code>Person</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Person();
                                    if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'Date');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('ethnicity')) {
                obj['ethnicity'] = ApiClient.convertToType(data['ethnicity'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} firstName
    */
    firstName = undefined;
    /**
    * @member {String} lastName
    */
    lastName = undefined;
    /**
    * @member {Date} dateOfBirth
    */
    dateOfBirth = undefined;
    /**
    * The person's gender. Leave blank for 'unknown'.
    * @member {String} gender
    */
    gender = undefined;
    /**
    * @member {String} ethnicity
    */
    ethnicity = undefined;
    /**
    * @member {String} address
    */
    address = undefined;




}
