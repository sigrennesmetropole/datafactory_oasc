/* eslint-disable no-unused-vars */
const Service = require('./Service');
const config = require('../config');
/**
* Landing page
* The landing page provides links to the API definition and the conformance statements for this API.
*
* returns landingPage
* */
const getLandingPage = () => new Promise(
  async (resolve, reject) => {
    try {
      var hostname = config.URL_PATH+'/v1.1'
      resolve(Service.successResponse({
        "value": [
          {
            "name": "Datastreams",
            "url": hostname+"/Datastreams"
          },
          {
            "name": "FeaturesOfInterest",
            "url": hostname+"/FeaturesOfInterest"
          },
          {
            "name": "HistoricalLocations",
            "url": hostname+"/HistoricalLocations"
          },
          {
            "name": "Locations",
            "url": hostname+"/Locations"
          },
          {
            "name": "Observations",
            "url": hostname+"/Observations"
          },
          {
            "name": "ObservedProperties",
            "url": hostname+"/ObservedProperties"
          },
          {
            "name": "Sensors",
            "url": hostname+"/Sensors"
          },
          {
            "name": "Things",
            "url": hostname+"/Things"
          }
          /*,
          {
            "name": "MultiDatastreams",
            "url": hostname+"/MultiDatastreams"
          }*/
        ],
        "serverSettings": {
          "conformance": [
            "http://www.opengis.net/spec/iot_sensing/1.1/req/datamodel",
            "http://www.opengis.net/spec/iot_sensing/1.1/req/resource-path/resource-path-to-entities",
            "http://www.opengis.net/spec/iot_sensing/1.1/req/request-data",
          ]
        }
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getLandingPage,
};
