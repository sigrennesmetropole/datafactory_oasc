/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require("../config")
const db = require("../models");
const ObservedProperty = db.observedProperty;
const Op = db.Sequelize.Op;
/**
*
* entityId Long The id of the requested entity
* page Long The number of the page to return (optional)
* size Long The number of elements to return (optional)
* filter String A filter query. (optional)
* returns Datastreams
* */
const observedPropertiesEntityIdDatastreamsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, ObservedProperty, "ObservedProperty", "", Op, "Datastreams")
    .then(data => {
      resolve(data.payload.Datastreams)
    }).catch(err => {
      reject(err);
    });
  },
);
/**
*
* entityId Long The id of the requested entity
* returns ObservedProperty
* */
const observedPropertiesEntityIdGET = ({ entityId, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, ObservedProperty, "ObservedProperty", select, Op, expand)
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  },
);
/**
*
* entityId Long The id of the requested entity
* page Long The number of the page to return (optional)
* size Long The number of elements to return (optional)
* filter String A filter query. (optional)
* returns MultiDatastreams
* */
const observedPropertiesEntityIdMultiDatastreamsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, ObservedProperty, "ObservedProperty", "", Op, "MultiDatastreams")
    .then(data => {
      resolve(data.payload.MultiDatastreams)
    }).catch(err => {
      reject(err);
    });
  },
);
/**
*
* page Long The number of the page to return (optional)
* size Long The number of elements to return (optional)
* filter String A filter query. (optional)
* returns ObservedProperties
* */
const observedPropertiesGET = ({ page, size, filter, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findAll(page, size, filter, select, expand, ObservedProperty, "ObservedProperty", config, "ObservedProperty")
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  },
);

module.exports = {
  observedPropertiesEntityIdDatastreamsGET,
  observedPropertiesEntityIdGET,
  observedPropertiesEntityIdMultiDatastreamsGET,
  observedPropertiesGET,
};
