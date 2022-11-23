// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('multiDatastreams', {
//     id: {
//       autoIncrement: true,
//       autoIncrementIdentity: true,
//       type: DataTypes.BIGINT,
//       allowNull: false,
//       primaryKey: true,
//       field: 'ID'
//     },
//     name: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//       field: 'NAME'
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//       field: 'DESCRIPTION'
//     },
//     observationTypes: {
//       type: DataTypes.JSONB,
//       allowNull: true,
//       field: 'OBSERVATION_TYPES'
//     },
//     phenomenonTimeStart: {
//       type: DataTypes.DATE,
//       allowNull: true,
//       field: 'PHENOMENON_TIME_START'
//     },
//     phenomenonTimeEnd: {
//       type: DataTypes.DATE,
//       allowNull: true,
//       field: 'PHENOMENON_TIME_END'
//     },
//     resultTimeStart: {
//       type: DataTypes.DATE,
//       allowNull: true,
//       field: 'RESULT_TIME_START'
//     },
//     resultTimeEnd: {
//       type: DataTypes.DATE,
//       allowNull: true,
//       field: 'RESULT_TIME_END'
//     },
//     sensorId: {
//       type: DataTypes.BIGINT,
//       allowNull: false,
//       references: {
//         model: 'SENSORS',
//         key: 'ID'
//       },
//       field: 'SENSOR_ID'
//     },
//     thingId: {
//       type: DataTypes.BIGINT,
//       allowNull: false,
//       references: {
//         model: 'THINGS',
//         key: 'ID'
//       },
//       field: 'THING_ID'
//     },
//     unitOfMeasurements: {
//       type: DataTypes.JSONB,
//       allowNull: true,
//       field: 'UNIT_OF_MEASUREMENTS'
//     },
//     observedArea: {
//       type: DataTypes.GEOMETRY('GEOMETRY', 4326),
//       allowNull: true,
//       field: 'OBSERVED_AREA'
//     },
//     properties: {
//       type: DataTypes.JSONB,
//       allowNull: true,
//       field: 'PROPERTIES'
//     },
//     lastFoiId: {
//       type: DataTypes.BIGINT,
//       allowNull: true,
//       field: 'LAST_FOI_ID'
//     }
//   }, {
//     sequelize,
//     tableName: 'MULTI_DATASTREAMS',
//     schema: 'sensorthings',
//     timestamps: false,
//     indexes: [
//       {
//         name: "MULTI_DATASTREAMS_PKEY",
//         unique: true,
//         fields: [
//           { name: "ID" },
//         ]
//       },
//       {
//         name: "MULTI_DATASTREAMS_SENSOR_ID",
//         fields: [
//           { name: "SENSOR_ID" },
//         ]
//       },
//       {
//         name: "MULTI_DATASTREAMS_THING_ID",
//         fields: [
//           { name: "THING_ID" },
//         ]
//       },
//     ]
//   });
// };
