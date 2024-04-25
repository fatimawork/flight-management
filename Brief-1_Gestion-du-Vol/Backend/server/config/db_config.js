const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with your database connection details
const sequelize = new Sequelize('vol_management', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

exports.sequelize = sequelize;