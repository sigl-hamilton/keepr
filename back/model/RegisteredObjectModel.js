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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
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
    }, {
        tableName: 'registered_object'
    });
};