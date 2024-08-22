const House = require('../models/House');

exports.createHouse = async (req, res) => {
  try {
    const house = await House.create(req.body);
    res.status(201).json(house);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllHouses = async (req, res) => {
  try {
    const houses = await House.findAll();
    res.status(200).json(houses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHouseById = async (req, res) => {
  try {
    const house = await House.findByPk(req.params.id);
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }
    res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHouse = async (req, res) => {
  try {
    const house = await House.findByPk(req.params.id);
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }
    await house.update(req.body);
    res.status(200).json(house);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHouse = async (req, res) => {
  try {
    const house = await House.findByPk(req.params.id);
    if (!house) {
      return res.status(404).json({ message: 'House not found' });
    }
    await house.destroy();
    res.status(204).json({ message: 'House deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
