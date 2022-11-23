const Sequelize = require('sequelize');
const config = require("../config");
const Hooks = require('./Hooks');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datastreams', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ID'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'DESCRIPTION'
    },
    observationType: {
      type: Sequelize.ENUM,
      values: ['http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CategoryObservation', 'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CountObservation', 'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement', 'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Observation', 'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_TruthObservation'],
      allowNull: true,
      field: 'OBSERVATION_TYPE'
    },
    phenomenonTimeStart: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'PHENOMENON_TIME_START'
    },
    phenomenonTimeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'PHENOMENON_TIME_END'
    },
    phenomenonTime : {
      type: Sequelize.DataTypes.VIRTUAL,
      get() {
        var val = "";
        if(!!this['phenomenonTimeStart']){
          val = this['phenomenonTimeStart'].toISOString();
          if(!!this['phenomenonTimeEnd']){
              val += '/'+this['phenomenonTimeEnd'].toISOString();
          }
        }
        delete this.dataValues.phenomenonTimeStart;
        delete this.dataValues.phenomenonTimeEnd;
        return val;
      },
      allowNull: true
    }, 
    resultTimeStart: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'RESULT_TIME_START'
    },
    resultTimeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'RESULT_TIME_END'
    },
    resultTime : {
      type: Sequelize.DataTypes.VIRTUAL,
      get() {
        var val = "";
        if(!!this['resultTimeStart']){
          val = this['resultTimeStart'].toISOString();
          if(!!this['resultTimeEnd']){
              val += '/'+this['resultTimeEnd'].toISOString();
          }
        }
        delete this.dataValues.resultTimeStart;
        delete this.dataValues.resultTimeEnd;
        return val;
      },
      allowNull: true
    },
    thingId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'THINGS',
        key: 'ID'
      },
      field: 'THING_ID'
    },
    unitName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'UNIT_NAME'
    },
    unitSymbol: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'UNIT_SYMBOL'
    },
    unitDefinition: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'UNIT_DEFINITION'
    },
    unitOfMeasurement : {
      type: Sequelize.VIRTUAL,
      get() { 
          const val = {
          name: this['unitName'],
          symbol: this["unitSymbol"],
          unitDefinition: this["unitDefinition"]
        }
        delete this.dataValues.unitName;
        delete this.dataValues.unitSymbol;
        delete this.dataValues.unitDefinition;
        return val;
      },
      allowNull: false
    }, 
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'NAME'
    },
    observedArea: {
      type: DataTypes.GEOMETRY('GEOMETRY', 0),
      allowNull: true,
      field: 'OBSERVED_AREA'
    },
    sensorId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SENSORS',
        key: 'ID'
      },
      field: 'SENSOR_ID'
    },
    obsPropertyId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'OBS_PROPERTY_ID'
    },
    lastFoiId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'LAST_FOI_ID'
    },
    properties: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'PROPERTIES'
    }
  }, {
    sequelize,
    tableName: 'DATASTREAMS',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "DATASTREAMS_PKEY",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "DATASTREAMS_THING_ID",
        fields: [
          { name: "THING_ID" },
        ]
      },
    ],
    hooks: {
      afterFind(findResult) {
        Hooks.hookDatastream(findResult, config);
      }
    }
  });
};
