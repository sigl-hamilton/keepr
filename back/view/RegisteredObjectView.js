const bodyParser = require('body-parser');
const dbInit = require("../model/init");
const RegisteredObject = require("../model/RegisteredObjectModel")(dbInit.sequelize, dbInit.Sequelize);

const jsonParser = bodyParser.json();

function exposeRegisteredObjectViews(app) {
    app.get('/registeredObject', (request, response) => {
        // Respond all the registeredObjects
        response.type("json");
        RegisteredObject.findAll().then(objects => {
            response.send(JSON.stringify(objects));
        });
    });

    app.get('/registeredObject/:id', (request, response) => {
        response.type("json");
        // Respond the matching registeredObject
        RegisteredObject.findByPk(request.params.id).then(object => {
            response.send(JSON.stringify(object));
        });
    });

    app.post('/registeredObject/', jsonParser, (request, response) => {
        response.type("json");
        // Create a new user
        RegisteredObject.create({
            name: request.body.name,
            code: request.body.code,
            createdAt: new Date().toString(),
            updatedAt: new Date().toString()
        }).then(object => {
            response.send(JSON.stringify(object));
        }); // FIXME Error management
    });

    app.put('/registeredObject/:id', jsonParser, (request, response) => {
        response.type("json");
        response.send('API endpoint for updating registered object ' + request.params.id)
    });

    app.delete('/registeredObject/:id', (request, response) => {
        response.type("json");
        response.send('API endpoint for deleting registered object ' + request.params.id)
    });
}

exports.exposeViews = exposeRegisteredObjectViews;