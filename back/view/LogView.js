const bodyParser = require('body-parser');
const dbInit = require("../model/init");
const Log = require("../model/LogModel")(dbInit.sequelize, dbInit.Sequelize);

const jsonParser = bodyParser.json();

function exposeLogViews(app) {
    // Returns all the registered objects
    app.get('/log', (request, response) => {
        // Respond all the registeredObjects
        response.type("json");
        Log.findAll().then(objects => {
            // Sending the response
            response.send(JSON.stringify(objects));
        });
    });

    // Returns ont registered object
    app.get('/log/:id', (request, response) => {
        response.type("json");
        // Respond the matching registeredObject
        Log.findByPk(request.params.id).then(object => {
            // Sending the response
            response.send(JSON.stringify(object));
        });
    });
}

exports.exposeViews = exposeLogViews;