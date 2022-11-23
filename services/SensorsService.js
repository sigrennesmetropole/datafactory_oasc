/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require("../config")
const db = require("../models");
const Sensors = db.sensors;
const Op = db.Sequelize.Op;
/**
*
* entityId Long The id of the requested entity
* page Long The number of the page to return (optional)
* size Long The number of elements to return (optional)
* filter String A filter query. (optional)
* returns Datastreams
* */
const sensorsEntityIdDatastreamsGET = ({ entityId }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Sensors, "Sensors", "", Op, "datastreams")
    .then(data => {
      resolve(data.payload.datastreams)
    }).catch(err => {
      reject(err);
    });
  },
);
/**
*
* entityId Long The id of the requested entity
* returns Sensor
* */
const sensorsEntityIdGET = ({ entityId, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findById(entityId, Sensors, "Sensors", select, Op, expand)
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
// const sensorsEntityIdMultiDatastreamsGET = ({ entityId }) => new Promise(
//   async (resolve, reject) => {
//     Service.findById(entityId, Sensors, "Sensors", "", Op, "MultiDatastreams")
//     .then(data => {
//       resolve(data.payload.MultiDatastreams)
//     }).catch(err => {
//       reject(err);
//     });
//   },
// );
/**
*
* page Long The number of the page to return (optional)
* size Long The number of elements to return (optional)
* filter String A filter query. (optional)
* returns Sensors
* */
const sensorsGET = ({ page, size, filter, select, expand }) => new Promise(
  async (resolve, reject) => {
    Service.findAll(page, size, filter, select, expand, Sensors, "Sensors", config, "Sensors")
    .then(data => {
      resolve(data)
    }).catch(err => {
      reject(err);
    });
  },
);

module.exports = {
  sensorsEntityIdDatastreamsGET,
  sensorsEntityIdGET,
  //sensorsEntityIdMultiDatastreamsGET,
  sensorsGET,
};
