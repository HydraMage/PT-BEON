const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Resident = require('./ResidentHouse');

const Payment = sequelize.define('Payment', {
  payment_date: { type: DataTypes.DATE, allowNull: false },
  cleaning_fee: { type: DataTypes.INTEGER, defaultValue: 15000 },
  security_fee: { type: DataTypes.INTEGER, defaultValue: 100000 },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
});

Payment.belongsTo(Resident, { foreignKey: 'resident_id' });

module.exports = Payment;
