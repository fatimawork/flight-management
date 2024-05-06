const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with your database connection details
const sequelize = new Sequelize('vol_management', 'root', 'latifa123', {
  host: 'localhost',
<<<<<<< HEAD
  port: 3306,
=======
  port: '3306',
>>>>>>> 6d83b5e75d3a3b46d2a3c32ae562b2a13dfaa77e
  dialect: 'mysql',
  
});

exports.sequelize = sequelize;