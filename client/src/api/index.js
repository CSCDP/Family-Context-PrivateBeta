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

import ApiClient from './ApiClient';
import AdultSocialCare from './model/AdultSocialCare';
import Body from './model/Body';
import Contact from './model/Contact';
import Housing from './model/Housing';
import InlineResponse200 from './model/InlineResponse200';
import OffenceSummary from './model/OffenceSummary';
import Person from './model/Person';
import PersonQuery from './model/PersonQuery';
import PersonWithRelationship from './model/PersonWithRelationship';
import Police from './model/Police';
import School from './model/School';
import ServiceDetail from './model/ServiceDetail';
import ServiceSummary from './model/ServiceSummary';
import AuthApi from './api/AuthApi';
import PersonApi from './api/PersonApi';

/**
* This_is_the_DRAFT__WORK_IN_PROGRESS_API_definition_for_Family_Context__This_document_is_currently_undergoing_rapid_change_and_should_not_be_used_as_basis_for_implementation_without_discussing_with_the_project_team_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FamilyContext = require('index'); // See note below*.
* var xxxSvc = new FamilyContext.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FamilyContext.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FamilyContext.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FamilyContext.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdultSocialCare model constructor.
     * @property {module:model/AdultSocialCare}
     */
    AdultSocialCare,

    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The Housing model constructor.
     * @property {module:model/Housing}
     */
    Housing,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The OffenceSummary model constructor.
     * @property {module:model/OffenceSummary}
     */
    OffenceSummary,

    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person,

    /**
     * The PersonQuery model constructor.
     * @property {module:model/PersonQuery}
     */
    PersonQuery,

    /**
     * The PersonWithRelationship model constructor.
     * @property {module:model/PersonWithRelationship}
     */
    PersonWithRelationship,

    /**
     * The Police model constructor.
     * @property {module:model/Police}
     */
    Police,

    /**
     * The School model constructor.
     * @property {module:model/School}
     */
    School,

    /**
     * The ServiceDetail model constructor.
     * @property {module:model/ServiceDetail}
     */
    ServiceDetail,

    /**
     * The ServiceSummary model constructor.
     * @property {module:model/ServiceSummary}
     */
    ServiceSummary,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The PersonApi service constructor.
    * @property {module:api/PersonApi}
    */
    PersonApi
};
