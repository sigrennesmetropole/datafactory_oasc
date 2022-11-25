/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require("../config")
const db = require("../models");
const Location = db.locations;
const Op = db.Sequelize.Op;
/**
*
* entityId Long The id of the requested entity
* returns Location
* */
const locationsEntityIdGET = ({ entityId, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Location, "Location", select, Op, expand)
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
const locationsEntityIdHistoricalLocationsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Location, "Location", "", Op, "histLocation")
    .then(data => {
      resolve(data.payload.histLocation)
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
* returns Things
* */
const locationsEntityIdThingsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Location, "Location", "", Op, "thing")
    .then(data => {
      resolve(data.payload.thing)
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
* returns Locations
* */
const locationsGET = ({ page, size, filter, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findAll(page, size, filter, select, expand, Location, "Location", config, "Locations")
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  },
);

module.exports = {
  locationsEntityIdGET,
  locationsEntityIdHistoricalLocationsGET,
  locationsEntityIdThingsGET,
  locationsGET,
};
