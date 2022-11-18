const config = require("../config")

module.exports = (sequelize, Sequelize) => {
    const Observations = sequelize.define("observations", {
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
            allowNull: false
        }, 
        //TODO comprendre le mécanisme Any (depends on the observationType defined in the associated Datastream)
        result: {
            type: Sequelize.STRING,
            field: "RESULT_STRING",
            allowNull: false
        },
        resultTime : {
            type: Sequelize.DATE,
            field: "RESULT_TIME",
            allowNull: false
        }, 
        resultQuality : {
            type: Sequelize.DATE,
            field: "RESULT_QUALITY",
            allowNull: true
        }, 
        validTimeStart : {
            type: Sequelize.DATE,
            field: "VALID_TIME_START"
        }, 
        validTimeEnd : {
            type: Sequelize.DATE,
            field: "VALID_TIME_END"
        },  
        validTime : {
            type: Sequelize.DataTypes.VIRTUAL,
            get() {
              var val = "";
              if(!!this['validTimeStart']){
                val = this['validTimeStart'].toISOString();
                if(!!this['validTimeEnd']){
                    val += '/'+this['validTimeEnd'].toISOString();
                }
              }
              delete this.dataValues.validTimeStart;
              delete this.dataValues.validTimeEnd;
              return val;
            },
            allowNull: true
        }, 
        parameters: {
            type: Sequelize.JSON,
            field: "PARAMETERS",
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
              return hostname+'/Observations/'+this['ID']+'';
            },
            allowNull: false
        },
        "FeatureOfInterest@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Observations/'+this['ID']+'/FeatureOfInterest';
            },
            allowNull: false
        },
        "Datastream@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Observations/'+this['ID']+'/Datastream';
            },
            allowNull: false
        },        
        "MultiDatastream@iot.navigationLink": {
            type: Sequelize.VIRTUAL,
            get() {
                var hostname = config.URL_PATH+':'+config.URL_PORT;
              return hostname+'/Observations/'+this['ID']+'/MultiDatastream';
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
        tableName: 'OBSERVATIONS'
    });
    return Observations;
  };