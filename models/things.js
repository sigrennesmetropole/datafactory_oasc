const Sequelize = require('sequelize');
const config = require("../config");
const Hooks = require('./Hooks');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('things', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ID'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'DESCRIPTION'
    },
    properties: {
      type: DataTypes.JSON,
      allowNull: true,
      field: 'PROPERTIES'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'NAME'
    }
  }, {
    sequelize,
    tableName: 'THINGS',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "THINGS_PKEY",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ],
    hooks: {
      afterFind(findResult) {
        Hooks.hookThing(findResult, config);
      }
    }
  });
};
