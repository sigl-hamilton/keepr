const bodyParser = require('body-parser');
const dbInit = require("../model/init");
const User = require("../model/UserModel")(dbInit.sequelize, dbInit.Sequelize);

const jsonParser = bodyParser.json();

function exposeUserViews(app) {
    // Returns all the registered objects
    app.get('/user', (request, response) => {
        // Respond all the registeredObjects
        response.type("json");
        User.findAll().then(objects => {
            response.send(JSON.stringify(objects));
        });
    });

    // Returns ont registered object
    app.get('/user/:id', (request, response) => {
        response.type("json");
        // Respond the matching registeredObject
        User.findByPk(request.params.id).then(object => {
            response.send(JSON.stringify(object));
        });
    });

    // Creates a new registered object
    app.post('/user/', jsonParser, (request, response) => {
        response.type("json");
        // Create a new user
        User.create({
            name: request.body.name,
            email: request.body.email,
            type: request.body.type,
            createdAt: new Date().toString(),
            updatedAt: new Date().toString()
        }).then(object => {
            response.send(JSON.stringify(object));
        }); // FIXME Error management
    });

    // Updates a registered object AND RETURNS THE NUMBER OF AFFECTED ROWS
    app.put('/user/:id', jsonParser, (request, response) => {
        response.type("json");
        User.update({
            name: request.body.name,
            email: request.body.email,
            type: request.body.type,
            updatedAt: new Date().toString()
        }, { where: { id: request.params.id }}).then(affectedRowsNb => {
            response.send(JSON.stringify(affectedRowsNb)); // FIXME Return format, compared to delete
        });
    });

    // Deletes a registered object
    app.delete('/user/:id', (request, response) => {
        response.type("json");
        User.destroy({
            where: {
                id: request.params.id
            }
        }).then(affectedRowsNb => {
            response.send(JSON.stringify(affectedRowsNb)); // FIXME Return format, compared to update
        });
    });
}

exports.exposeViews = exposeUserViews;