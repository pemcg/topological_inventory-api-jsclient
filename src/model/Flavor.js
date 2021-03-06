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
 * The Flavor model module.
 * @module model/Flavor
 * @version 0.1.0
 */
class Flavor {
    /**
     * Constructs a new <code>Flavor</code>.
     * @alias module:model/Flavor
     */
    constructor() { 
        
        Flavor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Flavor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Flavor} obj Optional instance to populate.
     * @return {module:model/Flavor} The populated <code>Flavor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Flavor();

            if (data.hasOwnProperty('archived_at')) {
                obj['archived_at'] = ApiClient.convertToType(data['archived_at'], 'Date');
            }
            if (data.hasOwnProperty('cpus')) {
                obj['cpus'] = ApiClient.convertToType(data['cpus'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('disk_count')) {
                obj['disk_count'] = ApiClient.convertToType(data['disk_count'], 'Number');
            }
            if (data.hasOwnProperty('disk_size')) {
                obj['disk_size'] = ApiClient.convertToType(data['disk_size'], 'Number');
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_seen_at')) {
                obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Date');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('source_id')) {
                obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
            }
            if (data.hasOwnProperty('source_ref')) {
                obj['source_ref'] = ApiClient.convertToType(data['source_ref'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} archived_at
 */
Flavor.prototype['archived_at'] = undefined;

/**
 * Number of CPUs
 * @member {Number} cpus
 */
Flavor.prototype['cpus'] = undefined;

/**
 * @member {Date} created_at
 */
Flavor.prototype['created_at'] = undefined;

/**
 * The number of default disks
 * @member {Number} disk_count
 */
Flavor.prototype['disk_count'] = undefined;

/**
 * Size of the default disks in bytes
 * @member {Number} disk_size
 */
Flavor.prototype['disk_size'] = undefined;

/**
 * @member {String} extra
 */
Flavor.prototype['extra'] = undefined;

/**
 * ID of the resource
 * @member {String} id
 */
Flavor.prototype['id'] = undefined;

/**
 * @member {Date} last_seen_at
 */
Flavor.prototype['last_seen_at'] = undefined;

/**
 * Amount of RAM in bytes
 * @member {Number} memory
 */
Flavor.prototype['memory'] = undefined;

/**
 * @member {String} name
 */
Flavor.prototype['name'] = undefined;

/**
 * ID of the resource
 * @member {String} source_id
 */
Flavor.prototype['source_id'] = undefined;

/**
 * @member {String} source_ref
 */
Flavor.prototype['source_ref'] = undefined;

/**
 * @member {Date} updated_at
 */
Flavor.prototype['updated_at'] = undefined;






export default Flavor;

