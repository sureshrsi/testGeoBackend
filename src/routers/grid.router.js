const express = require('express');
const gridController = require('../controllers/grid.controller');
const router = express.Router();

router.get('/getGridByCircleGid', gridController.getGridByCircleGid);

module.exports = router;