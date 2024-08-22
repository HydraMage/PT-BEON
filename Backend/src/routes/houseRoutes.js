const express = require('express');
const router = express.Router();
const houseController = require('../controllers/houseController');

router.post('/houses', houseController.createHouse);
router.get('/houses', houseController.getAllHouses);
router.get('/houses/:id', houseController.getHouseById);
router.put('/houses/:id', houseController.updateHouse);
router.delete('/houses/:id', houseController.deleteHouse);

module.exports = router;
