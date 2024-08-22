const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Resident = sequelize.define('Resident', {
  full_name: { type: DataTypes.STRING, allowNull: false },
  id_card_photo: { type: DataTypes.STRING },
  is_contract: { type: DataTypes.BOOLEAN, defaultValue: false },
  phone_number: { type: DataTypes.STRING, allowNull: false },
  is_married: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Resident;
