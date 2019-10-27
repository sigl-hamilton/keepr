const dbInit = require("../model/init");
const RegisteredObject = require("../model/RegisteredObjectModel")(dbInit.sequelize, dbInit.Sequelize);

function getAllRegisteredObjects () {
    console.log("GET all registered objects");
    RegisteredObject.findAll().then(objects => {
        console.log("All registered objects:", JSON.stringify(objects, null, 4));
    });
}

function getRegisteredObject (id) {
    console.log("GET one registered object (" + id.toString() + ")");
}

function createRegisteredObject (body) {
    console.log("POST one registered object");
    console.log("- name: " + body.name);
    console.log("- code: " + body.code);
}

function updateRegisteredObject (id, body) {
    console.log("PUT one registered object (" + id.toString() + ")");
    console.log("- name: " + body.name);
    console.log("- code: " + body.code);
}

function deleteRegisteredObject (id) {
    console.log("DELETE one registered object (" + id.toString() + ")");
}

exports.getAll = getAllRegisteredObjects;
exports.getOne = getRegisteredObject;
exports.createOne = createRegisteredObject;
exports.updateOne = updateRegisteredObject;
exports.deleteOne = deleteRegisteredObject;