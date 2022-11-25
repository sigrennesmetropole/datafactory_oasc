const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thingsLocations', {
    thingId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'THINGS',
        key: 'ID'
      },
      field: 'THING_ID'
    },
    locationId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'LOCATIONS',
        key: 'ID'
      },
      field: 'LOCATION_ID'
    }
  }, {
    sequelize,
    tableName: 'THINGS_LOCATIONS',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "THINGS_LOCATIONS_LOCATION_ID",
        fields: [
          { name: "LOCATION_ID" },
        ]
      },
      {
        name: "THINGS_LOCATIONS_PKEY",
        unique: true,
        fields: [
          { name: "THING_ID" },
          { name: "LOCATION_ID" },
        ]
      },
      {
        name: "THINGS_LOCATIONS_THING_ID",
        fields: [
          { name: "THING_ID" },
        ]
      },
    ]
  });
};
