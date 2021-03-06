/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.1.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VolumeAttachment model module.
 * @module model/VolumeAttachment
 * @version 0.1.0
 */
class VolumeAttachment {
    /**
     * Constructs a new <code>VolumeAttachment</code>.
     * @alias module:model/VolumeAttachment
     */
    constructor() { 
        
        VolumeAttachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('vm_id')) {
                obj['vm_id'] = ApiClient.convertToType(data['vm_id'], 'String');
            }
            if (data.hasOwnProperty('volume_id')) {
                obj['volume_id'] = ApiClient.convertToType(data['volume_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} device
 */
VolumeAttachment.prototype['device'] = undefined;

/**
 * ID of the resource
 * @member {String} id
 */
VolumeAttachment.prototype['id'] = undefined;

/**
 * @member {String} state
 */
VolumeAttachment.prototype['state'] = undefined;

/**
 * ID of the resource
 * @member {String} vm_id
 */
VolumeAttachment.prototype['vm_id'] = undefined;

/**
 * ID of the resource
 * @member {String} volume_id
 */
VolumeAttachment.prototype['volume_id'] = undefined;






export default VolumeAttachment;

