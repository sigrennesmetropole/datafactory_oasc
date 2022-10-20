const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const Datastreams = sequelize.define("datastreams", {
        name: {
            type: Sequelize.STRING,
            field: "NAME",
            allowNull: false
        }, 
        description: {
            type: Sequelize.STRING,
            field: "DESCRIPTION",
            allowNull: false
        }, 
        unitName: {
            type: Sequelize.STRING,
            field: "UNIT_NAME"
        },
        unitSymbol: {
            type: Sequelize.STRING,
            field: "UNIT_SYMBOL"
        },
        unitDefinition: {
            type: Sequelize.STRING,
            field: "UNIT_DEFINITION"
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
        observationtype: {
            type: Sequelize.ENUM,
            values: ['http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CategoryObservation', 'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CountObservation', 'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement', 'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Observation', 'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_TruthObservation'],
            field: "OBSERVATION_TYPE",
            allowNull: false
        }, 
        properties: {
            type: Sequelize.JSON,
            field: "PROPERTIES",
            allowNull: true
        }, 
        observedarea : {
            type: Sequelize.GEOMETRY,
            field: "OBSERVED_AREA",
            allowNull: true
        }, 
        phenomenonTimeStart : {
            type: Sequelize.DATE,
            field: "PHENOMENON_TIME_START"
        }, 
        phenomenonTimeEnd : {
            type: Sequelize.DATE,
            field: "PHENOMENON_TIME_END"
        },  
        phenomenonTime : {
            type: Sequelize.DataTypes.VIRTUAL,
            get() {
              const val = this['phenomenonTimeStart'].toISOString()+'/'+this['phenomenonTimeEnd'].toISOString();
              delete this.dataValues.phenomenonTimeStart;
              delete this.dataValues.phenomenonTimeEnd;
              return val;
            },
            allowNull: true
        }, 
        resultTimeStart : {
            type: Sequelize.DATE,
            field: "RESULT_TIME_START"
        }, 
        resultTimeEnd : {
            type: Sequelize.DATE,
            field: "RESULT_TIME_END"
        },
        resultTime : {
            type: Sequelize.DataTypes.VIRTUAL,
            get() {
              const val = this['resultTimeStart'].toISOString()+'/'+this['resultTimeEnd'].toISOString();
              delete this.dataValues.resultTimeStart;
              delete this.dataValues.resultTimeEnd;
              return val;
            },
            allowNull: true
        },
        ID : {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        "@iot.selfLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Datastreams/'+this['ID'];
            },
            allowNull: false
        },
        "Thing@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Datastreams/'+this['ID']+'/Thing';
            },
            allowNull: false
        },
        "Sensor@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Datastreams/'+this['ID']+'/Sensor';
            },
            allowNull: false
        },
        "ObservedProperty@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Datastreams/'+this['ID']+'/ObservedProperty';
            },
            allowNull: false
        },
        "Observations@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Datastreams/'+this['ID']+'/Observations';
            },
            allowNull: false
        },
        "@iot.id" : {
            type: Sequelize.VIRTUAL,
            get() { 
                const val = this['ID']
                delete this.dataValues.ID;
                return val;
            },
            allowNull: false
        }, 
    }, {
        schema: 'sensorthings',
        timestamps: false,
        tableName: 'DATASTREAMS'
    });
    return Datastreams;
  };