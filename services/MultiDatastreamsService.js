// /* eslint-disable no-unused-vars */
// const Service = require('./Service');
// const config = require("../config")
// const db = require("../models");
// const MultiDatastreams = db.multiDatastreams;
// const Op = db.Sequelize.Op;
// /**
// *
// * entityId Long The id of the requested entity
// * returns MultiDatastream
// * */
// const multiDatastreamsEntityIdGET = ({ entityId, select, expand }) => new Promise(
//   async (resolve, reject) => {
//     Service.findById(entityId, MultiDatastreams, "MultiDatastream", select, Op, expand)
//     .then(data => {
//       resolve(data)
//     }).catch(err => {
//       reject(err);
//     });
//   },
// );
// /**
// *
// * entityId Long The id of the requested entity
// * page Long The number of the page to return (optional)
// * size Long The number of elements to return (optional)
// * filter String A filter query. (optional)
// * returns Observations
// * */
// const multiDatastreamsEntityIdObservationsGET = ({ entityId }) => new Promise(
//   async (resolve, reject) => {
//     Service.findById(entityId, MultiDatastreams, "MultiDatastreams", "", Op, "Observations")
//     .then(data => {
//       resolve(data.payload.Observations)
//     }).catch(err => {
//       reject(err);
//     });
//   },
// );
// /**
// *
// * entityId Long The id of the requested entity
// * page Long The number of the page to return (optional)
// * size Long The number of elements to return (optional)
// * filter String A filter query. (optional)
// * returns ObservedProperties
// * */
// const multiDatastreamsEntityIdObservedPropertiesGET = ({ entityId }) => new Promise(
//   async (resolve, reject) => {
//     Service.findById(entityId, MultiDatastreams, "MultiDatastreams", "", Op, "ObservedProperty")
//     .then(data => {
//       resolve(data.payload.ObservedProperty)
//     }).catch(err => {
//       reject(err);
//     });
//   },
// );
// /**
// *
// * entityId Long The id of the requested entity
// * page Long The number of the page to return (optional)
// * size Long The number of elements to return (optional)
// * filter String A filter query. (optional)
// * returns Sensor
// * */
// const multiDatastreamsEntityIdSensorGET = ({ entityId }) => new Promise(
//   async (resolve, reject) => {
//     Service.findById(entityId, MultiDatastreams, "MultiDatastreams", "", Op, "Sensor")
//     .then(data => {
//       resolve(data.payload.Sensor)
//     }).catch(err => {
//       reject(err);
//     });
//   },
// );
// /**
// *
// * entityId Long The id of the requested entity
// * page Long The number of the page to return (optional)
// * size Long The number of elements to return (optional)
// * filter String A filter query. (optional)
// * returns Thing
// * */
// const multiDatastreamsEntityIdThingGET = ({ entityId }) => new Promise(
//   async (resolve, reject) => {
//     Service.findById(entityId, MultiDatastreams, "MultiDatastreams", "", Op, "Thing")
//     .then(data => {
//       resolve(data.payload.Thing)
//     }).catch(err => {
//       reject(err);
//     });
//   },
// );
// /**
// *
// * page Long The number of the page to return (optional)
// * size Long The number of elements to return (optional)
// * filter String A filter query. (optional)
// * returns MultiDatastreams
// * */
// const multiDatastreamsGET = ({ page, size, filter, select, expand }) => new Promise(
//   async (resolve, reject) => {
//     Service.findAll(page, size, filter, select, expand, MultiDatastreams, "MultiDatastream", config, "MultiDatastream")
//     .then(data => {
//       resolve(data)
//     }).catch(err => {
//       reject(err);
//     });
//   },
// );

// module.exports = {
//   multiDatastreamsEntityIdGET,
//   multiDatastreamsEntityIdObservationsGET,
//   multiDatastreamsEntityIdObservedPropertiesGET,
//   multiDatastreamsEntityIdSensorGET,
//   multiDatastreamsEntityIdThingGET,
//   multiDatastreamsGET,
// };
