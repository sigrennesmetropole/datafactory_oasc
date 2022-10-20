/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require("../config")
const db = require("../models");
const Things = db.things;
const Op = db.Sequelize.Op;

/**
*
* entityId Long The id of the requested entity
* returns Datastreams
* */
const thingsEntityIdDatastreamsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, Things, "Things", Op, "Datastreams")
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
* returns Thing
* */
const thingsEntityIdGET = ({ entityId, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Things, "Things", select, Op, expand)
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
* returns HistoricalLocations
* */
const thingsEntityIdHistoricalLocationsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, Things, "Things", Op, "HistoricalLocations")
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
* returns Locations
* */
const thingsEntityIdLocationsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, Things, "Things", Op, "Locations")
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
const thingsEntityIdMultiDatastreamsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, Things, "Things", Op, "MultiDatastreams")
    .then(data => {
      resolve(data)
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
* returns Things
* */
const thingsGET = ({ page, size, filter, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findAll(page, size, filter, select, expand, Things, "Things", config, "Things")
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  },
);

module.exports = {
  thingsEntityIdDatastreamsGET,
  thingsEntityIdGET,
  thingsEntityIdHistoricalLocationsGET,
  thingsEntityIdLocationsGET,
  thingsEntityIdMultiDatastreamsGET,
  thingsGET,
};
