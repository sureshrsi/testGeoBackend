const express = require('express');
const circleController = require('../controllers/circle.controller');
const router = express.Router();

router.get('/getcircle', circleController.getCircle);

module.exports = router;