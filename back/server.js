const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const registeredObjectView = require('./view/RegisteredObjectView');

const app = express();

var Sequelize = require('sequelize');
const sequelize = new Sequelize('keepr', 'keepr', 'Keepr3306', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
const PORT = 4000;

var RegisteredObject = sequelize.define('registered_object', {
    code: Sequelize.STRING,
    name: Sequelize.STRING
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(cors());
app.use(bodyParser.json());

registeredObjectView.exposeViews(app);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});