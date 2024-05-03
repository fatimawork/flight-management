const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with your database connection details
const sequelize = new Sequelize('vol_management', 'root', 'root', {
  host: 'localhost',
  port: '3309',
  dialect: 'mysql',
});

exports.sequelize = sequelize;