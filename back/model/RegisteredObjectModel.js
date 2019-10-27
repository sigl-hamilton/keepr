/*
const dbInit = require("./init");

const Model = dbInit.Sequelize.Model;
class RegisteredObject extends Model {}
RegisteredObject.init({
    // attributes
    id: {
        type: dbInit.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: dbInit.Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: dbInit.Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: dbInit.sequelize,
    modelName: 'registered_object'
});

exports = RegisteredObject;
*/
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('registered_object', {
        // attributes
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'registered_object'
    });
};