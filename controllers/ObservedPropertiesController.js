/**
 * The ObservedPropertiesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ObservedPropertiesService');
const observedPropertiesEntityIdDatastreamsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.observedPropertiesEntityIdDatastreamsGET);
};

const observedPropertiesEntityIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.observedPropertiesEntityIdGET);
};

const observedPropertiesEntityIdMultiDatastreamsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.observedPropertiesEntityIdMultiDatastreamsGET);
};

const observedPropertiesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.observedPropertiesGET);
};


module.exports = {
  observedPropertiesEntityIdDatastreamsGET,
  observedPropertiesEntityIdGET,
  observedPropertiesEntityIdMultiDatastreamsGET,
  observedPropertiesGET,
};
