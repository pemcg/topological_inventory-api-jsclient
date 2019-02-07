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
import CollectionLinks from './CollectionLinks';
import CollectionMetadata from './CollectionMetadata';
import Endpoint from './Endpoint';

/**
 * The EndpointsCollection model module.
 * @module model/EndpointsCollection
 * @version 0.1.0
 */
class EndpointsCollection {
    /**
     * Constructs a new <code>EndpointsCollection</code>.
     * @alias module:model/EndpointsCollection
     */
    constructor() { 
        
        EndpointsCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EndpointsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointsCollection} obj Optional instance to populate.
     * @return {module:model/EndpointsCollection} The populated <code>EndpointsCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndpointsCollection();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = CollectionMetadata.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CollectionLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Endpoint]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CollectionMetadata} meta
 */
EndpointsCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/CollectionLinks} links
 */
EndpointsCollection.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/Endpoint>} data
 */
EndpointsCollection.prototype['data'] = undefined;






export default EndpointsCollection;
