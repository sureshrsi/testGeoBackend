const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cicle = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    aadharNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'items' // Ensure table name matches the database
});

console.log('Item model defined:', Cicle !== undefined);

module.exports = Cicle;