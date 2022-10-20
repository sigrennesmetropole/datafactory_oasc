const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const FeaturesOfInterest = sequelize.define("featuresofinterest", {
        name : {
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
            values : ["application/geo+json"],
            field: "ENCODING_TYPE",
            allowNull: false
        }, 
        featureType : {
            type: Sequelize.STRING,
            field: "FEATURE"
        }, 
        geometry : {
            type: Sequelize.GEOMETRY,
            field: "GEOM"
        },
        feature : {
            type: Sequelize.VIRTUAL,
            get() { 
                const val = {
                type: this['featureType'],
                geometry: this["geometry"]
              }
              delete this.dataValues.featureType;
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
              return hostname+'/FeatureOfInterest/'+this["ID"]+'';
            },
            allowNull: false
        },
        "Observations@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/FeatureOfInterest/'+this["ID"]+'/Observations';
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
        tableName: 'FEATURES'
    });
    return FeaturesOfInterest;
  };