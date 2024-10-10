const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { isNotAuthenticated } = require("../../middlewares/auth");
const router = require("express").Router();
const cache = require("../../middlewares/catch");

let database2 = mongoose.createConnection("mongodb://localhost:27017/user_db");
let loginSchema = new mongoose.Schema({
  email: String,
  password: String,
});
let loginModel = database2.model("users", loginSchema);

router.get("/", isNotAuthenticated, cache("5 minutes"), (req, res) => {
  res.render("login", { errorMessage: null });
});
router.post("/login", async (req, res) => {
  let data = await loginModel.findOne({ email: req.body.email });
  if (data && (await bcrypt.compare(req.body.password, data.password))) {
    req.session.userId = data._id;
    res.redirect("/home");
  } else {
    return res.render("login", {
      errorMessage: "Invalid username or password",
    });
  }
});

module.exports = router;
