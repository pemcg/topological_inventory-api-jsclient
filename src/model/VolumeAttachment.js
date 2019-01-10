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
* The VolumeAttachment model module.
* @module model/VolumeAttachment
* @version 0.0.1
*/
export default class VolumeAttachment {
    /**
    * Constructs a new <code>VolumeAttachment</code>.
    * @alias module:model/VolumeAttachment
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>VolumeAttachment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VolumeAttachment} obj Optional instance to populate.
    * @return {module:model/VolumeAttachment} The populated <code>VolumeAttachment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VolumeAttachment();

            
            
            

            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} device
    */
    device = undefined;
    /**
    * @member {String} state
    */
    state = undefined;








}

