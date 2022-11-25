const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locationsHistLocations', {
    locationId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'LOCATIONS',
        key: 'ID'
      },
      field: 'LOCATION_ID'
    },
    histLocationId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'HIST_LOCATIONS',
        key: 'ID'
      },
      field: 'HIST_LOCATION_ID'
    }
  }, {
    sequelize,
    tableName: 'LOCATIONS_HIST_LOCATIONS',
    schema: 'sensorthings',
    timestamps: false,
    indexes: [
      {
        name: "LOCATIONS_HIST_LOCATIONS_HIST_LOCATION_ID",
        fields: [
          { name: "HIST_LOCATION_ID" },
        ]
      },
      {
        name: "LOCATIONS_HIST_LOCATIONS_LOCATION_ID",
        fields: [
          { name: "LOCATION_ID" },
        ]
      },
      {
        name: "LOCATIONS_HIST_LOCATIONS_PKEY",
        unique: true,
        fields: [
          { name: "LOCATION_ID" },
          { name: "HIST_LOCATION_ID" },
        ]
      },
    ]
  });
};
