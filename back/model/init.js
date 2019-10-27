const DATABASE = "keepr";
const USER = "keepr";
const PASSWORD = "Keepr3306";
const HOST = "localhost";
const DIALECT = "mysql";

const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;