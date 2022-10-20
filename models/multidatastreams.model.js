const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const MultiDatastreams = sequelize.define("multiDatastreams", {
        name: {
            type: Sequelize.STRING,
            field: "NAME"
        }, 
        description: {
            type: Sequelize.STRING,
            field: "DESCRIPTION"
        }, 
        unitOfMeasurement: {
            type: Sequelize.JSON,
            field: "UNIT_OF_MEASUREMENTS"
        },
        observationtype: {
            type: Sequelize.JSON,
            field: "OBSERVATION_TYPES"
        }, 
        observedarea : {
            type: Sequelize.GEOMETRY,
            field: "OBSERVED_AREA"
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
        },
        ID : {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        "@iot.selfLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/MultiDatastreams/'+this['ID'];
            },
            allowNull: false
        },
        "Thing@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/MultiDatastreams/'+this['ID']+'/Thing';
            },
            allowNull: false
        },
        "Sensor@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/MultiDatastreams/'+this['ID']+'/Sensor';
            },
            allowNull: false
        },
        "ObservedProperty@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/MultiDatastreams/'+this['ID']+'/ObservedProperty';
            },
            allowNull: false
        },
        "Observations@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/MultiDatastreams/'+this['ID']+'/Observations';
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
        tableName: 'MULTI_DATASTREAMS'
    });
    return MultiDatastreams;
  };