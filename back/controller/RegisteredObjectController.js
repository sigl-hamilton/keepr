

function getAllRegisteredObjects () {
    console.log("GET all registered objects");
}

function getRegisteredObject (id) {
    console.log("GET one registered object (" + id.toString() + ")");
}

function createRegisteredObject (id, name, code) {
    console.log("POST one registered object (" + id.toString() + ", " + name + ", " + code + ")");
}

function updateRegisteredObject (id, newName, newCode) {
    console.log("PUT one registered object (" + id.toString() + ", " + newName + ", " + newCode + ")");
}

function deleteRegisteredObject (id) {
    console.log("DELETE one registered object (" + id.toString() + ")");
}

exports.getAll = getAllRegisteredObjects;
exports.getOne = getRegisteredObject;
exports.createOne = createRegisteredObject;
exports.updateOne = updateRegisteredObject;
exports.deleteOne = deleteRegisteredObject;