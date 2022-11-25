const Sequelize = require('sequelize');
const config = require("../config");
const Hooks = require('./Hooks');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sensors', {
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
      values: ["application/pdf", "http://www.opengis.net/doc/IS/SensorML/2.0", "text/html"],
      allowNull: true,
      field: 'ENCODING_TYPE'
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'METADATA'
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
    tableName: 'SENSORS',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "SENSORS_PKEY",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ],
    hooks: {
      afterFind(findResult) {
        Hooks.hookSensor(findResult, config);
      }
    }
  });
};
