const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const HistoricalLocations = sequelize.define("historicallocations", { 
        time : {
            type: Sequelize.DATE,
            field: "TIME",
            allowNull: false
        }, 
        ID : {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        "@iot.selfLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/HistoricalLocations/'+this["ID"]+'';
            },
            allowNull: false
        },
        "Locations@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/HistoricalLocations/'+this["ID"]+'/Locations';
            },
            allowNull: false
        },
        "Thing@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/HistoricalLocations/'+this["ID"]+'/Thing';
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
        tableName: 'HIST_LOCATIONS'
    });
    return HistoricalLocations;
  };