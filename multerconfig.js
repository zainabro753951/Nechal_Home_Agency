const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, "public/uploads"); // Folder for image1
    } else if (file.fieldname === "profileImage") {
      cb(null, "public/uploads/profileImage"); // Folder for image2
    } // Yahan images store hongi
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

let upload = multer({ storage });

module.exports = upload;
