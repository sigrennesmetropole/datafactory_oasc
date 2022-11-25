/**
 * The FeaturesOfInterestController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/FeaturesOfInterestService');
const featuresOfInterestEntityIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.featuresOfInterestEntityIdGET);
};

const featuresOfInterestEntityIdObservationsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.featuresOfInterestEntityIdObservationsGET);
};

const featuresOfInterestGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.featuresOfInterestGET);
};


module.exports = {
  featuresOfInterestEntityIdGET,
  featuresOfInterestEntityIdObservationsGET,
  featuresOfInterestGET,
};
