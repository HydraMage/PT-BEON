const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const House = sequelize.define('House', {
  house_number: { type: DataTypes.STRING, allowNull: false, unique: true },
  is_occupied: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = House;
