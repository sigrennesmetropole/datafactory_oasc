const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const Locations = sequelize.define("locations", { 
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
        encodingType : {
            type: Sequelize.ENUM,
            values: ['application/geo+json'],
            field: "ENCODING_TYPE",
            allowNull: false
        },  
        locationType : {
            type: Sequelize.STRING,
            field: "LOCATION"
        }, 
        geometry : {
            type: Sequelize.GEOMETRY,
            field: "GEOM"
        },
        location : {
            type: Sequelize.VIRTUAL,
            get() { 
                const val = {
                type: this['locationType'],
                geometry: this["geometry"]
              }
              delete this.dataValues.locationType;
              delete this.dataValues.geometry;
              return val;
            },
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
              return hostname+'/Things/'+this["ID"]+'';
            },
            allowNull: false
        },
        "Things@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Locations/'+this["ID"]+'/Things';
            },
            allowNull: false
        },
        "HistoricalLocations@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Locations/'+this["ID"]+'/HistoricalLocations';
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
        tableName: 'LOCATIONS'
    });
    return Locations;
  };