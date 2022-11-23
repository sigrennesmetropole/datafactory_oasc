// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('multiDatastreamsObsProperties', {
//     multiDatastreamId: {
//       type: DataTypes.BIGINT,
//       allowNull: false,
//       primaryKey: true,
//       references: {
//         model: 'MULTI_DATASTREAMS',
//         key: 'ID'
//       },
//       field: 'MULTI_DATASTREAM_ID'
//     },
//     obsPropertyId: {
//       type: DataTypes.BIGINT,
//       allowNull: false,
//       primaryKey: true,
//       references: {
//         model: 'OBS_PROPERTIES',
//         key: 'ID'
//       },
//       field: 'OBS_PROPERTY_ID'
//     },
//     rank: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       field: 'RANK'
//     }
//   }, {
//     sequelize,
//     tableName: 'MULTI_DATASTREAMS_OBS_PROPERTIES',
//     schema: 'sensorthings',
//     timestamps: false,
//     indexes: [
//       {
//         name: "MDOP_MULTI_DATASTREAM_ID",
//         fields: [
//           { name: "MULTI_DATASTREAM_ID" },
//         ]
//       },
//       {
//         name: "MDOP_OBS_PROPERTY_ID",
//         fields: [
//           { name: "OBS_PROPERTY_ID" },
//         ]
//       },
//       {
//         name: "MULTI_DATASTREAMS_OBS_PROPERTIES_PKEY",
//         unique: true,
//         fields: [
//           { name: "MULTI_DATASTREAM_ID" },
//           { name: "OBS_PROPERTY_ID" },
//           { name: "RANK" },
//         ]
//       },
//     ]
//   });
// };
