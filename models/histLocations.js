const Sequelize = require('sequelize');
const config = require("../config");
const Hooks = require('./Hooks');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('histLocations', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'ID'
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'TIME'
    },
    thingId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'THINGS',
        key: 'ID'
      },
      field: 'THING_ID'
    }
  }, {
    sequelize,
    tableName: 'HIST_LOCATIONS',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "HIST_LOCATIONS_PKEY",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "HIST_LOCATIONS_THING_ID",
        fields: [
          { name: "THING_ID" },
        ]
      },
    ],
    hooks: {
      afterFind(findResult) {
        Hooks.hookHistLocations(findResult, config);
      }
    }
  });
};
