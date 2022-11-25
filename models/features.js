const Sequelize = require('sequelize');
const config = require("../config");
const Hooks = require('./Hooks');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('features', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ID'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'DESCRIPTION'
    },
    encodingType: {
      type: Sequelize.ENUM,
      values : ["application/geo+json"],
      allowNull: true,
      field: 'ENCODING_TYPE'
    },
    feature: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'FEATURE'
    },
    geom: {
      type: DataTypes.GEOMETRY('GEOMETRY', 4326),
      allowNull: true,
      field: 'GEOM'
    },
    feature : {
      type: Sequelize.VIRTUAL,
      get() { 
          const val = {
          type: this['featureType'],
          geometry: this["geom"]
        }
        delete this.dataValues.featureType;
        delete this.dataValues.geom;
        return val;
      },
      allowNull: false
    }, 
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "no name",
      field: 'NAME'
    },
    properties: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'PROPERTIES'
    }
  }, {
    sequelize,
    tableName: 'FEATURES',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "FEATURES_PKEY",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ],
    hooks: {
      afterFind(findResult) {
        Hooks.hookFeatures(findResult, config);
      }
    }
  });
};
