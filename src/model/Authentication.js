/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.0.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The Authentication model module.
* @module model/Authentication
* @version 0.0.1
*/
export default class Authentication {
    /**
    * Constructs a new <code>Authentication</code>.
    * @alias module:model/Authentication
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Authentication</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Authentication} obj Optional instance to populate.
    * @return {module:model/Authentication} The populated <code>Authentication</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Authentication();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
            if (data.hasOwnProperty('authtype')) {
                obj['authtype'] = ApiClient.convertToType(data['authtype'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_type')) {
                obj['resource_type'] = ApiClient.convertToType(data['resource_type'], 'String');
            }
            if (data.hasOwnProperty('resource_id')) {
                obj['resource_id'] = ApiClient.convertToType(data['resource_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('status_details')) {
                obj['status_details'] = ApiClient.convertToType(data['status_details'], 'String');
            }
            if (data.hasOwnProperty('userid')) {
                obj['userid'] = ApiClient.convertToType(data['userid'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} tenant_id
    */
    tenant_id = undefined;
    /**
    * @member {String} authtype
    */
    authtype = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} resource_type
    */
    resource_type = undefined;
    /**
    * @member {String} resource_id
    */
    resource_id = undefined;
    /**
    * @member {String} status
    */
    status = undefined;
    /**
    * @member {String} status_details
    */
    status_details = undefined;
    /**
    * @member {String} userid
    */
    userid = undefined;








}

