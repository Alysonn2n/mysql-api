const Sequelize = require('sequelize');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const dialect = process.env.DIALECT;
const database = process.env.DATABASE;
const host = process.env.HOST;

const connection = new Sequelize(database, username, password, {
    host,
    dialect
})

module.exports = connection;