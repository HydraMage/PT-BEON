const express = require('express');
const router = express.Router();
const residentController = require('../controllers/residentController');

router.post('/residents', residentController.createResident);
router.get('/residents', residentController.getAllResidents);
router.get('/residents/:id', residentController.getResidentById);
router.put('/residents/:id', residentController.updateResident);
router.delete('/residents/:id', residentController.deleteResident);

module.exports = router;
