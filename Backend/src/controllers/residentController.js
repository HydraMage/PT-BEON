const Resident = require('../models/ResidentHouse');

exports.createResident = async (req, res) => {
  try {
    const resident = await Resident.create(req.body);
    res.status(201).json(resident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllResidents = async (req, res) => {
  try {
    const residents = await Resident.findAll();
    res.status(200).json(residents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResidentById = async (req, res) => {
  try {
    const resident = await Resident.findByPk(req.params.id);
    if (!resident) {
      return res.status(404).json({ message: 'Resident not found' });
    }
    res.status(200).json(resident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateResident = async (req, res) => {
  try {
    const resident = await Resident.findByPk(req.params.id);
    if (!resident) {
      return res.status(404).json({ message: 'Resident not found' });
    }
    await resident.update(req.body);
    res.status(200).json(resident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteResident = async (req, res) => {
  try {
    const resident = await Resident.findByPk(req.params.id);
    if (!resident) {
      return res.status(404).json({ message: 'Resident not found' });
    }
    await resident.destroy();
    res.status(204).json({ message: 'Resident deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
