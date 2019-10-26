const controller = require('../controller/RegisteredObjectController');

function exposeRegisteredObjectViews(app) {
    app.get('/registeredObject', (request, response) => {
        controller.getAll();
        response.send('API endpoint for getting all registered objects')
    });
    app.get('/registeredObject/:id', (request, response) => {
        controller.getOne("${req.params.userId}");
        response.send('API endpoint for getting registered object ${req.params.userId}')
    });
    app.post('/registeredObject/:id', (request, response) => {
        controller.createOne("${req.params.userId}", "", "");
        response.send('API endpoint for creating registered object ${req.params.userId}')
    });
    app.put('/registeredObject/:id', (request, response) => {
        controller.updateOne("${req.params.userId}", "", "");
        response.send('API endpoint for updating registered object ${req.params.userId}')
    });
    app.delete('/registeredObject/:id', (request, response) => {
        controller.deleteOne("${req.params.userId}");
        response.send('API endpoint for deleting registered object ${req.params.userId}')
    });
}

exports.exposeViews = exposeRegisteredObjectViews;