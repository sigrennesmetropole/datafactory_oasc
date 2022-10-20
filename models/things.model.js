const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const Things = sequelize.define("things", { 
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
              return hostname+'/Things/'+this['ID']+'';
            },
            allowNull: false
        },
        "Locations@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Things/'+this['ID']+'/Locations';
            },
            allowNull: false
        },
        "Datastreams@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Things/'+this['ID']+'/Datastreams';
            },
            allowNull: false
        },
        "MultiDatastreams@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Things/'+this['ID']+'/MultiDatastreams';
            },
            allowNull: false
        },
        "HistoricalLocations@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Things/'+this['ID']+'/HistoricalLocations';
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
        tableName: 'THINGS',
        timestamps: false
    });
    return Things;
  };