const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.datastreams = require("./datastreams.model.js")(sequelize, Sequelize);
db.featuresOfInterest = require("./featuresOfInterest.model.js")(sequelize, Sequelize);
db.historicalLocations = require("./historicalLocations.model.js")(sequelize, Sequelize);
db.locations = require("./locations.model.js")(sequelize, Sequelize);
db.observations = require("./observations.model.js")(sequelize, Sequelize);
db.observedProperty = require("./observedProperty.model.js")(sequelize, Sequelize);
db.sensors = require("./sensors.model.js")(sequelize, Sequelize);
db.things = require("./things.model.js")(sequelize, Sequelize);
db.multidatastreams = require("./multidatastreams.model.js")(sequelize, Sequelize);

db.things.hasMany(db.datastreams, {
  as: "Datastreams",
  foreignKey: 'THING_ID' 
});

db.datastreams.belongsTo(db.things, { 
  as: "Thing",
  foreignKey: 'THING_ID' 
});

db.sensors.hasMany(db.datastreams, {
  as: "Datastreams",
  foreignKey: 'SENSOR_ID' 
});

db.datastreams.belongsTo(db.sensors, { 
  as: "Sensor",
  foreignKey: 'SENSOR_ID' 
});

db.observedProperty.hasMany(db.datastreams, {
  as: "Datastreams",
  foreignKey: 'OBS_PROPERTY_ID' 
});

db.datastreams.belongsTo(db.observedProperty, { 
  as: "ObservedProperty",
  foreignKey: 'OBS_PROPERTY_ID' 
});

db.datastreams.hasMany(db.observations, {
  as: "Observations",
  foreignKey: 'DATASTREAM_ID' 
});

db.observations.belongsTo(db.datastreams, { 
  as: "Datastream",
  foreignKey: 'DATASTREAM_ID' 
});

db.featuresOfInterest.hasMany(db.observations, {
  as: "Observations",
  foreignKey: 'FEATURE_ID' 
});

db.observations.belongsTo(db.featuresOfInterest, { 
  as: "FeatureOfInterest",
  foreignKey: 'FEATURE_ID' 
});

db.things.hasMany(db.historicalLocations, {
  as: "HistoricalLocations",
  foreignKey: 'THING_ID' 
});

db.historicalLocations.belongsTo(db.things, { 
  as: "Thing",
  foreignKey: 'THING_ID' 
});

const locationsHistLocations = sequelize.define("locationsHistLocations", { 
  locationId: {
      type: Sequelize.INTEGER,
      references: {
        model: db.locations,
        key: 'ID'
      },
      field: "LOCATION_ID"
    },
    HistoricalLocationId: {
      type: Sequelize.INTEGER,
      references: {
        model: db.historicalLocations,
        key: 'ID'
      },
      field: "HIST_LOCATION_ID"
    }
}, {
  schema: 'sensorthings',
  timestamps: false,
  tableName: 'LOCATIONS_HIST_LOCATIONS'
});

db.historicalLocations.belongsToMany(db.locations, {through: locationsHistLocations});
db.locations.belongsToMany(db.historicalLocations, {through: locationsHistLocations});

const thingsLocations = sequelize.define("thingsLocations", { 
  locationId: {
      type: Sequelize.INTEGER,
      references: {
        model: db.locations,
        key: 'ID'
      },
      field: "LOCATION_ID"
    },
    thingId: {
      type: Sequelize.INTEGER,
      references: {
        model: db.things,
        key: 'ID'
      },
      field: "THING_ID"
    }
}, {
  schema: 'sensorthings',
  timestamps: false,
  tableName: 'THINGS_LOCATIONS'
});

db.things.belongsToMany(db.locations, {through: thingsLocations});
db.locations.belongsToMany(db.things, {through: thingsLocations});

module.exports = db;