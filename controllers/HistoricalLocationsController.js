/**
 * The HistoricalLocationsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/HistoricalLocationsService');
const historicalLocationsEntityIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.historicalLocationsEntityIdGET);
};

const historicalLocationsEntityIdLocationsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.historicalLocationsEntityIdLocationsGET);
};

const historicalLocationsEntityIdThingGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.historicalLocationsEntityIdThingGET);
};

const historicalLocationsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.historicalLocationsGET);
};


module.exports = {
  historicalLocationsEntityIdGET,
  historicalLocationsEntityIdLocationsGET,
  historicalLocationsEntityIdThingGET,
  historicalLocationsGET,
};
