const Sequelize = require('sequelize');
const config = require("../config");
const Hooks = require('./Hooks');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations', {
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
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ENCODING_TYPE'
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'LOCATION'
    },
    geom: {
      type: DataTypes.GEOMETRY('GEOMETRY', 4326),
      allowNull: true,
      field: 'GEOM'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "no name",
      field: 'NAME'
    },
    genFoiId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'GEN_FOI_ID'
    },
    properties: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'PROPERTIES'
    }
  }, {
    sequelize,
    tableName: 'LOCATIONS',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "LOCATIONS_PKEY",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ],
    hooks: {
      afterFind(findResult) {
        Hooks.hookLocations(findResult, config);
      }
    }
  });
};
