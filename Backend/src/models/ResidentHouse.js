const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Resident = require('./Resident');
const House = require('./House');

const ResidentHouse = sequelize.define('ResidentHouse', {
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: true },
});

ResidentHouse.belongsTo(Resident, { foreignKey: 'resident_id' });
ResidentHouse.belongsTo(House, { foreignKey: 'house_id' });

module.exports = ResidentHouse;
