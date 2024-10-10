const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/userPics"); // Yahan images store hongi
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

let userPicUploads = multer({ storage });

module.exports = userPicUploads;
