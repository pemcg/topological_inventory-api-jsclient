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
    instance = new TopologicalInventory.ContainerGroup();
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

  describe('ContainerGroup', function() {
    it('should create an instance of ContainerGroup', function() {
      // uncomment below and update the code to test ContainerGroup
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be.a(TopologicalInventory.ContainerGroup);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property ipaddress (base name: "ipaddress")', function() {
      // uncomment below and update the code to test the property ipaddress
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property sourceCreatedAt (base name: "source_created_at")', function() {
      // uncomment below and update the code to test the property sourceCreatedAt
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property sourceDeletedAt (base name: "source_deleted_at")', function() {
      // uncomment below and update the code to test the property sourceDeletedAt
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property containerNodeId (base name: "container_node_id")', function() {
      // uncomment below and update the code to test the property containerNodeId
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property containerProjectId (base name: "container_project_id")', function() {
      // uncomment below and update the code to test the property containerProjectId
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property sourceId (base name: "source_id")', function() {
      // uncomment below and update the code to test the property sourceId
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property sourceRef (base name: "source_ref")', function() {
      // uncomment below and update the code to test the property sourceRef
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenant_id")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new TopologicalInventory.ContainerGroup();
      //expect(instance).to.be();
    });

  });

}));
