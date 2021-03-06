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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.@ManageiqTopologicalInventory);
  }
}(this, function(expect, @ManageiqTopologicalInventory) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @ManageiqTopologicalInventory.ServiceOfferingIconsCollection();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ServiceOfferingIconsCollection', function() {
    it('should create an instance of ServiceOfferingIconsCollection', function() {
      // uncomment below and update the code to test ServiceOfferingIconsCollection
      //var instane = new @ManageiqTopologicalInventory.ServiceOfferingIconsCollection();
      //expect(instance).to.be.a(@ManageiqTopologicalInventory.ServiceOfferingIconsCollection);
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instane = new @ManageiqTopologicalInventory.ServiceOfferingIconsCollection();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new @ManageiqTopologicalInventory.ServiceOfferingIconsCollection();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new @ManageiqTopologicalInventory.ServiceOfferingIconsCollection();
      //expect(instance).to.be();
    });

  });

}));
