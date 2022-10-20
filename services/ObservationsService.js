/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require("../config")
const db = require("../models");
const Observations = db.observations;
const Op = db.Sequelize.Op;
/**
*
* entityId Long The id of the requested entity
* page Long The number of the page to return (optional)
* size Long The number of elements to return (optional)
* filter String A filter query. (optional)
* returns Datastream
* */
const observationsEntityIdDatastreamGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, Observations, "Observations", Op, "Datastreams")
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
* returns FeatureOfInterest
* */
const observationsEntityIdFeatureOfInterestGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, Observations, "Observations", Op, "FeatureOfInterest")
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
* returns Observation
* */
const observationsEntityIdGET = ({ entityId, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Observations, "Observations", select, Op, expand)
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
* returns MultiDatastream
* */
const observationsEntityIdMultiDatastreamGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findSubById(entityId, Observations, "Observations", Op, "MultiDatastreams")
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
* returns Observations
* */
const observationsGET = ({ page, size, filter, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findAll(page, size, filter, select, expand, Observations, "Observations", config, "Observations")
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  },
);

module.exports = {
  observationsEntityIdDatastreamGET,
  observationsEntityIdFeatureOfInterestGET,
  observationsEntityIdGET,
  observationsEntityIdMultiDatastreamGET,
  observationsGET,
};
