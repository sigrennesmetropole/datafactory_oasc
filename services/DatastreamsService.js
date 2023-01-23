/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require("../config")
const db = require("../models");
const Datastreams = db.datastreams;
const Op = db.Sequelize.Op;

/**
*
* entityId Long The id of the requested entity
* returns Datastream
* */
const datastreamsEntityIdGET = ({ entityId, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Datastreams, "Datastreams", select, Op, expand)
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
* returns Observations
* */
const datastreamsEntityIdObservationsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Datastreams, "Datastreams", "", Op, "observations")
    .then(data => {
      resolve(data.payload.observations)
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
* returns ObservedProperty
* */
const datastreamsEntityIdObservedPropertyGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Datastreams, "Datastreams", "", Op, "obsProperty")
    .then(data => {
      resolve(data.payload.obsProperty)
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
* returns Sensor
* */
const datastreamsEntityIdSensorGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Datastreams, "Datastreams", "", Op, "sensor")
    .then(data => {
      resolve(data.payload.sensor)
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
const datastreamsEntityIdThingGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Datastreams, "Datastreams", "", Op, "thing")
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
* returns Datastreams
* */
const datastreamsGET = ({ page = 0, size = 10, filter, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findAll(page, size, filter, select, expand, Datastreams, "Datastreams", config, "Datastreams")
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  }
);

module.exports = {
  datastreamsEntityIdGET,
  datastreamsEntityIdObservationsGET,
  datastreamsEntityIdObservedPropertyGET,
  datastreamsEntityIdSensorGET,
  datastreamsEntityIdThingGET,
  datastreamsGET,
};
