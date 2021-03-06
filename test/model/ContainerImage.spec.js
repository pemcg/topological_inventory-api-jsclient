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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TopologicalInventory);
  }
}(this, function(expect, TopologicalInventory) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TopologicalInventory.ContainerImage();
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

  describe('ContainerImage', function() {
    it('should create an instance of ContainerImage', function() {
      // uncomment below and update the code to test ContainerImage
      //var instane = new TopologicalInventory.ContainerImage();
      //expect(instance).to.be.a(TopologicalInventory.ContainerImage);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TopologicalInventory.ContainerImage();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new TopologicalInventory.ContainerImage();
      //expect(instance).to.be();
    });

    it('should have the property sourceCreatedAt (base name: "source_created_at")', function() {
      // uncomment below and update the code to test the property sourceCreatedAt
      //var instane = new TopologicalInventory.ContainerImage();
      //expect(instance).to.be();
    });

    it('should have the property sourceDeletedAt (base name: "source_deleted_at")', function() {
      // uncomment below and update the code to test the property sourceDeletedAt
      //var instane = new TopologicalInventory.ContainerImage();
      //expect(instance).to.be();
    });

  });

}));
