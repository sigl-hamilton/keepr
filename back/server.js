const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbInit = require("./model/init");
const registeredObjectView = require('./view/RegisteredObjectView');

const app = express();
const PORT = 4000;

// Testing the connection
dbInit.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Initializing express' app
app.use(cors());
app.use(bodyParser.json());

// Exposing all the endpoints
registeredObjectView.exposeViews(app);

// Starting the listening loop
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});