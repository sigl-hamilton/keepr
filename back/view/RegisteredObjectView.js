const bodyParser = require('body-parser');
const dbInit = require("../model/init");
const RegisteredObject = require("../model/RegisteredObjectModel")(dbInit.sequelize, dbInit.Sequelize);

const jsonParser = bodyParser.json();

function exposeRegisteredObjectViews(app) {
    // Returns all the registered objects
    app.get('/registeredObject', (request, response) => {
        // Respond all the registeredObjects
        response.type("json");
        RegisteredObject.findAll().then(objects => {
            response.send(JSON.stringify(objects));
        });
    });

    // Returns ont registered object
    app.get('/registeredObject/:id', (request, response) => {
        response.type("json");
        // Respond the matching registeredObject
        RegisteredObject.findByPk(request.params.id).then(object => {
            response.send(JSON.stringify(object));
        });
    });

    // Creates a new registered object
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

    // Updates a registered object AND RETURNS THE NUMBER OF AFFECTED ROWS
    app.put('/registeredObject/:id', jsonParser, (request, response) => {
        response.type("json");
        RegisteredObject.update({
            name: request.body.name,
            code: request.body.code,
            updatedAt: new Date().toString()
        }, { where: { id: request.params.id }}).then(affectedRowsNb => {
            response.send(JSON.stringify(affectedRowsNb));
        });
    });

    // Deletes a registered object
    app.delete('/registeredObject/:id', (request, response) => {
        response.type("json");
        RegisteredObject.destroy({
            where: {
                id: request.params.id
            }
        }).then(affectedRowsNb => {
            response.send(JSON.stringify(affectedRowsNb));
        });
    });
}

exports.exposeViews = exposeRegisteredObjectViews;