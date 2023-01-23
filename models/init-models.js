var DataTypes = require("sequelize").DataTypes;
var _datastreams = require("./datastreams");
var _features = require("./features");
var _histLocations = require("./histLocations");
var _locations = require("./locations");
var _locationsHistLocations = require("./locationsHistLocations");
//var _multiDatastreams = require("./multiDatastreams");
//var _multiDatastreamsObsProperties = require("./multiDatastreamsObsProperties");
var _observations = require("./observations");
var _obsProperties = require("./obsProperties");
var _sensors = require("./sensors");
var _things = require("./things");
var _thingsLocations = require("./thingsLocations");

function initModels(sequelize) {
  var datastreams = _datastreams(sequelize, DataTypes);
  var features = _features(sequelize, DataTypes);
  var histLocations = _histLocations(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var locationsHistLocations = _locationsHistLocations(sequelize, DataTypes);
 // var multiDatastreams = _multiDatastreams(sequelize, DataTypes);
 // var multiDatastreamsObsProperties = _multiDatastreamsObsProperties(sequelize, DataTypes);
  var observations = _observations(sequelize, DataTypes);
  var obsProperties = _obsProperties(sequelize, DataTypes);
  var sensors = _sensors(sequelize, DataTypes);
  var things = _things(sequelize, DataTypes);
  var thingsLocations = _thingsLocations(sequelize, DataTypes);

  histLocations.belongsToMany(locations, { as: 'locations', through: locationsHistLocations, foreignKey: "histLocationId", otherKey: "locationId" });
  locations.belongsToMany(histLocations, { as: 'histLocation', through: locationsHistLocations, foreignKey: "locationId", otherKey: "histLocationId" });
  locations.belongsToMany(things, { as: 'thing', through: thingsLocations, foreignKey: "locationId", otherKey: "thingId" }); 
  datastreams.belongsTo(obsProperties, { as: "obsProperty", foreignKey: "obsPropertyId"});
  obsProperties.hasMany(datastreams, { as: "datastreams", foreignKey: "obsPropertyId"});
   // multiDatastreams.belongsToMany(obsProperties, { as: 'obsPropertyIdObsProperTies', through: multiDatastreamsObsProperties, foreignKey: "multiDatastreamId", otherKey: "obsPropertyId" });
   // obsProperties.belongsToMany(multiDatastreams, { as: 'multiDatastreamIdMultiDatastreams', through: multiDatastreamsObsProperties, foreignKey: "obsPropertyId", otherKey: "multiDatastreamId" });
  things.belongsToMany(locations, { as: 'locations', through: thingsLocations, foreignKey: "thingId", otherKey: "locationId" });
  observations.belongsTo(datastreams, { as: "datastream", foreignKey: "datastreamId"});
  datastreams.hasMany(observations, { as: "observations", foreignKey: "datastreamId"});
  observations.belongsTo(features, { as: "feature", foreignKey: "featureId"});
  features.hasMany(observations, { as: "observations", foreignKey: "featureId"});
  locationsHistLocations.belongsTo(histLocations, { as: "histLocation", foreignKey: "histLocationId"});
  histLocations.hasMany(locationsHistLocations, { as: "locationsHistLocations", foreignKey: "histLocationId"});
  locationsHistLocations.belongsTo(locations, { as: "location", foreignKey: "locationId"});
  locations.hasMany(locationsHistLocations, { as: "locationsHistLocations", foreignKey: "locationId"});
  thingsLocations.belongsTo(locations, { as: "location", foreignKey: "locationId"});
  locations.hasMany(thingsLocations, { as: "thingsLocations", foreignKey: "locationId"});
   // multiDatastreamsObsProperties.belongsTo(multiDatastreams, { as: "multiDatastream", foreignKey: "multiDatastreamId"});
  //  multiDatastreams.hasMany(multiDatastreamsObsProperties, { as: "multiDatastreamsObsProperTies", foreignKey: "multiDatastreamId"});
   // observations.belongsTo(multiDatastreams, { as: "multiDatastream", foreignKey: "multiDatastreamId"});
   // multiDatastreams.hasMany(observations, { as: "observations", foreignKey: "multiDatastreamId"});
   // multiDatastreamsObsProperties.belongsTo(obsProperties, { as: "obsProperty", foreignKey: "obsPropertyId"});
   // obsProperties.hasMany(multiDatastreamsObsProperties, { as: "multiDatastreamsObsProperTies", foreignKey: "obsPropertyId"});
  datastreams.belongsTo(sensors, { as: "sensor", foreignKey: "sensorId"});
  sensors.hasMany(datastreams, { as: "datastreams", foreignKey: "sensorId"});
   // multiDatastreams.belongsTo(sensors, { as: "sensor", foreignKey: "sensorId"});
   // sensors.hasMany(multiDatastreams, { as: "multiDatastreams", foreignKey: "sensorId"});
  datastreams.belongsTo(things, { as: "thing", foreignKey: "thingId"});
  things.hasMany(datastreams, { as: "datastreams", foreignKey: "thingId"});
  histLocations.belongsTo(things, { as: "thing", foreignKey: "thingId"});
  things.hasMany(histLocations, { as: "histLocations", foreignKey: "thingId"});
   // multiDatastreams.belongsTo(things, { as: "thing", foreignKey: "thingId"});
   // things.hasMany(multiDatastreams, { as: "multiDatastreams", foreignKey: "thingId"});
  thingsLocations.belongsTo(things, { as: "thing", foreignKey: "thingId"});
  things.hasMany(thingsLocations, { as: "thingsLocations", foreignKey: "thingId"});

  var datastream = datastreams;
  var thing = things;
  var feature = features;
  var histLocation = histLocations;
  var location = locations;
  var locationsHistLocation = locationsHistLocations;
  var observation = observations;
  var obsPropertie = obsProperties;
  var sensor = sensors;
  var thingsLocation = thingsLocations;
  return {
    datastreams,
    datastream,
    features,
    feature,
    histLocations,
    histLocation,
    locations,
    location,
    locationsHistLocations,
    locationsHistLocation,
     // multiDatastreams,
    //  multiDatastreamsObsProperties,
    observations,
    observation,
    obsProperties,
    obsPropertie,
    sensors,
    sensor,
    things,
    thing,
    thingsLocations,
    thingsLocation
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
