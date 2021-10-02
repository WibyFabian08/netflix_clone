const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (
      file.mimetype === "video/mp4" ||
      file.mimetype === "video/mkv" ||
      file.mimetype === "video/3gp"
    ) {
      cb(null, "public/videos");
    } else {
      cb(null, "public/images");
    }
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "video/mp4" ||
    file.mimetype === "video/mkv" ||
    file.mimetype === "video/3gp"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadFiles = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
}).fields([
  { name: "image", maxCount: 1 },
  { name: "movieLogo", maxCount: 1 },
  { name: "trailer", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);

module.exports = uploadFiles;
