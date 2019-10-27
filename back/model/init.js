const DATABASE = "keepr";
const USER = "keepr";
const PASSWORD = "Keepr3306";
const HOST = "127.0.0.1";
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