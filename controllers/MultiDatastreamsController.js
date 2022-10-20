/**
 * The MultiDatastreamsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/MultiDatastreamsService');
const multiDatastreamsEntityIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.multiDatastreamsEntityIdGET);
};

const multiDatastreamsEntityIdObservationsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.multiDatastreamsEntityIdObservationsGET);
};

const multiDatastreamsEntityIdObservedPropertiesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.multiDatastreamsEntityIdObservedPropertiesGET);
};

const multiDatastreamsEntityIdSensorGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.multiDatastreamsEntityIdSensorGET);
};

const multiDatastreamsEntityIdThingGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.multiDatastreamsEntityIdThingGET);
};

const multiDatastreamsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.multiDatastreamsGET);
};


module.exports = {
  multiDatastreamsEntityIdGET,
  multiDatastreamsEntityIdObservationsGET,
  multiDatastreamsEntityIdObservedPropertiesGET,
  multiDatastreamsEntityIdSensorGET,
  multiDatastreamsEntityIdThingGET,
  multiDatastreamsGET,
};
