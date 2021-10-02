const express = require('express');
const router = express.Router();

const uploadImage = require('../middlewares/uploadImage');

const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id/update', uploadImage, userController.updateUser);
router.delete('/:id/delete', uploadImage, userController.deleteUser);

module.exports = router;