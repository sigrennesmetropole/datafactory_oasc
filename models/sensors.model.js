const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const Sensors = sequelize.define("sensors", { 
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
            values: ["application/pdf", "http://www.opengis.net/doc/IS/SensorML/2.0", "text/html"],
            field: "ENCODING_TYPE",
            allowNull: false
        },
        metadata: {
            type: Sequelize.STRING,
            field: "METADATA",
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
              return hostname+'/Sensors/'+this['ID']+'';
            },
            allowNull: false
        },
        "Datastreams@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Sensors/'+this['ID']+'/Datastreams';
            },
            allowNull: false
        },
        "MultiDatastreams@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Sensors/'+this['ID']+'/MultiDatastreams';
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
        timestamps: false,
        tableName: 'SENSORS'
    });
    return Sensors;
  };