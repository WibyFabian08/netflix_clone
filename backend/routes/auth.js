const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

const uploadImage = require('../middlewares/uploadImage');

router.post('/register', uploadImage, authController.register);
router.post('/login', authController.login);

module.exports = router;