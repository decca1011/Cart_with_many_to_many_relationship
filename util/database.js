// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Sober@9#9373003764'
// });

// module.exports =pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root','Sober@9#9373003764', {
dialect: 'mysql',
host: 'localhost',
 
})

module.exports = sequelize;