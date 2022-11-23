/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require("../config")
const db = require("../models");
const FeatureOfInterest = db.features;
const Op = db.Sequelize.Op;
/**
*
* entityId Long The id of the requested entity
* returns FeatureOfInterest
* */
const featuresOfInterestEntityIdGET = ({ entityId, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, FeatureOfInterest, "FeatureOfInterest", select, Op, expand)
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
const featuresOfInterestEntityIdObservationsGET = ({ entityId}) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, FeatureOfInterest, "FeatureOfInterest", "", Op, "observations")
    .then(data => {
      resolve(data.payload.observations)
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
* returns FeaturesOfInterest
* */
const featuresOfInterestGET = ({ page, size, filter, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findAll(page, size, filter, select, expand, FeatureOfInterest, "FeatureOfInterest", config, "FeatureOfInterest")
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  },
);

module.exports = {
  featuresOfInterestEntityIdGET,
  featuresOfInterestEntityIdObservationsGET,
  featuresOfInterestGET,
};
