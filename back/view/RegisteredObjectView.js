const bodyParser = require('body-parser');
const dbInit = require("../model/init");
const RegisteredObject = require("../model/RegisteredObjectModel")(dbInit.sequelize, dbInit.Sequelize);
const User = require("../model/UserModel")(dbInit.sequelize, dbInit.Sequelize);

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

        // Create a new object if the user id is valid
        User.findByPk(request.body.userId).then(user => {
            RegisteredObject.create({
                name: request.body.name,
                code: request.body.code,
                createdAt: new Date().toString(),
                updatedAt: new Date().toString(),
                user_id: user.id
            }).then(object => {
                response.send(JSON.stringify(object));
            }).catch(reason => {
                response.send("Error: " + reason.toString())
            });
        }).catch(reason => {
            response.send("Error: " + reason.toString())
        });
        /*
        RegisteredObject.create({
            name: request.body.name,
            code: request.body.code,
            createdAt: new Date().toString(),
            updatedAt: new Date().toString()
        }).then(object => {
            response.send(JSON.stringify(object));
        }); // FIXME Error management
        */
    });

    // Updates a registered object AND RETURNS THE NUMBER OF AFFECTED ROWS
    app.put('/registeredObject/:id', jsonParser, (request, response) => {
        response.type("json");
        RegisteredObject.update({
            name: request.body.name,
            code: request.body.code,
            updatedAt: new Date().toString()
        }, { where: { id: request.params.id }}).then(affectedRowsNb => {
            response.send(JSON.stringify(affectedRowsNb)); // FIXME Return format, compared to delete
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
            response.send(JSON.stringify(affectedRowsNb)); // FIXME Return format, compared to update
        });
    });
}

exports.exposeViews = exposeRegisteredObjectViews;