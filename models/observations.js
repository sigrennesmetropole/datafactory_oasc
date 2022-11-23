const Sequelize = require('sequelize');
const config = require("../config");
const Hooks = require('./Hooks');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('observations', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ID'
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
      allowNull: false
    }, 
    resultTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'RESULT_TIME'
    },
    resultNumber: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'RESULT_NUMBER'
    },
    resultString: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'RESULT_STRING'
    },
    resultQuality: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'RESULT_QUALITY'
    },
    validTimeStart: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'VALID_TIME_START'
    },
    validTimeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'VALID_TIME_END'
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
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'PARAMETERS'
    },
    datastreamId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DATASTREAMS',
        key: 'ID'
      },
      field: 'DATASTREAM_ID'
    },
    featureId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'FEATURES',
        key: 'ID'
      },
      field: 'FEATURE_ID'
    },
    resultType: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'RESULT_TYPE'
    },
    resultJson: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'RESULT_JSON'
    },
    resultBoolean: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'RESULT_BOOLEAN'
    },
    // multiDatastreamId: {
    //   type: DataTypes.BIGINT,
    //   allowNull: true,
    //   references: {
    //     model: 'MULTI_DATASTREAMS',
    //     key: 'ID'
    //   },
    //   field: 'MULTI_DATASTREAM_ID'
    // }
  }, {
    sequelize,
    tableName: 'OBSERVATIONS',
    schema: 'sensorthings',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "OBSERVATIONS_DATASTREAM_ID",
        fields: [
          { name: "DATASTREAM_ID" },
        ]
      },
      {
        name: "OBSERVATIONS_FEATURE_ID",
        fields: [
          { name: "FEATURE_ID" },
        ]
      },
      // {
      //   name: "OBSERVATIONS_MULTI_DATASTREAM_ID",
      //   fields: [
      //     { name: "MULTI_DATASTREAM_ID" },
      //   ]
      // },
      {
        name: "OBSERVATIONS_PKEY",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ],
    hooks: {
      afterFind(findResult) {
        Hooks.hookObservations(findResult, config);
      }
    }
  });
};
