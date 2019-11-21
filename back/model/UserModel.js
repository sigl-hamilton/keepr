

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'user'
    });
};