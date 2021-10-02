const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/videos");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "video/mp4" ||
    file.mimetype === "video/mkv" ||
    file.mimetype === "video/3gp"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadVideo = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
}).single('video');

module.exports = uploadVideo;
