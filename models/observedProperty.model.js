const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const ObservedProperty = sequelize.define("observedproperties", { 
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
        definition: {
            type: Sequelize.STRING,
            field: "DEFINITION",
            allowNull: false
        }, 
        properties: {
            type: Sequelize.JSON,
            field: "PROPERTIES",
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
              return hostname+'/ObservedProperties/'+this['ID']+'';
            },
            allowNull: false
        },
        "Datastreams@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/ObservedProperties/'+this['ID']+'/Datastreams';
            },
            allowNull: false
        },        
        "MultiDatastreams@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/ObservedProperties/'+this['ID']+'/MultiDatastreams';
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
        }
    }, {
        schema: 'sensorthings',
        tableName: 'OBS_PROPERTIES',
        timestamps: false
    });
    return ObservedProperty;
  };