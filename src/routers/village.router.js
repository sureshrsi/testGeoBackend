const express = require('express');
const villageController = require('../controllers/village.controller');
const router = express.Router();

// namsai router
router.get('/getVillageByCircleGid', villageController.getVillageByCircleGid);

module.exports = router;