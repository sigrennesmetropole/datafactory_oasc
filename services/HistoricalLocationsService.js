/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require("../config")
const db = require("../models");
const HistoricalLocation = db.historicalLocations;
const Op = db.Sequelize.Op;
/**
*
* entityId Long The id of the requested entity
* returns HistoricalLocation
* */
const historicalLocationsEntityIdGET = ({ entityId, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, HistoricalLocation, "HistoricalLocation", select, Op, expand)
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
const historicalLocationsEntityIdLocationsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, HistoricalLocation, "HistoricalLocation", Op, "Location")
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
* returns Thing
* */
const historicalLocationsEntityIdThingGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, HistoricalLocation, "HistoricalLocation", Op, "Thing")
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
* returns HistoricalLocations
* */
const historicalLocationsGET = ({ page, size, filter, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findAll(page, size, filter, select, expand, HistoricalLocation, "HistoricalLocation", config, "HistoricalLocation")
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  },
);

module.exports = {
  historicalLocationsEntityIdGET,
  historicalLocationsEntityIdLocationsGET,
  historicalLocationsEntityIdThingGET,
  historicalLocationsGET,
};
