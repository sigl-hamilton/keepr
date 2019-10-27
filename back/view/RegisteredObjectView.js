const controller = require('../controller/RegisteredObjectController');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json()

function exposeRegisteredObjectViews(app) {
    app.get('/registeredObject', (request, response) => {
        controller.getAll();
        response.send('API endpoint for getting all registered objects')
    });

    app.get('/registeredObject/:id', (request, response) => {
        controller.getOne(request.params.id);
        response.send('API endpoint for getting registered object ' + request.params.id)
    });

    app.post('/registeredObject/', jsonParser, (request, response) => {
        controller.createOne(request.body);
        response.send('API endpoint for creating registered object')
    });

    app.put('/registeredObject/:id', jsonParser, (request, response) => {
        controller.updateOne(request.params.id, request.body);
        response.send('API endpoint for updating registered object ' + request.params.id)
    });

    app.delete('/registeredObject/:id', (request, response) => {
        controller.deleteOne(request.params.id);
        response.send('API endpoint for deleting registered object ' + request.params.id)
    });
}

exports.exposeViews = exposeRegisteredObjectViews;