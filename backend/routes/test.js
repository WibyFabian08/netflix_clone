const express = require("express");
const router = express.Router();

const uploadImage = require('../middlewares/uploadImage');
const uploadFiles = require('../middlewares/uploadFiles');
const uploadVideo = require('../middlewares/uploadVideo');

const testController = require("../controllers/test");

router.post("/", uploadFiles, testController.test);

module.exports = router;
