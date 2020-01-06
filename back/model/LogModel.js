const dbInit = require("../model/init");
const User = require("../model/UserModel")(dbInit.sequelize, dbInit.Sequelize);

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('registered_object', {
        // attributes
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        method: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        // It is possible to create foreign keys:
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                // This is a reference to another model
                model: User,
                // This is the column name of the referenced model
                key: 'id',
            }
        },
        comment: {
            type: DataTypes.STRING
        },
    }, {
        tableName: 'log'
    });
};