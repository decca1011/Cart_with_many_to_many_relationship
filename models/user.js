const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//const Cart = require('./cart'); // Import the Cart model

const User =sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        alllowNULL: false,
        primaryKey: true 
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
})
 
  
module.exports = User;