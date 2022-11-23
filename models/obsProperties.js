const Sequelize = require('sequelize');
const config = require("../config");
const Hooks = require('./Hooks');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obsProperties', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ID'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'NAME'
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'DEFINITION'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'DESCRIPTION'
    },
    properties: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'PROPERTIES'
    }
  }, {
    sequelize,
    tableName: 'OBS_PROPERTIES',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "OBS_PROPERTIES_PKEY",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ],
    hooks: {
      afterFind(findResult) {
        Hooks.hookObsPropperties(findResult, config);
      }
    }
  });
};
