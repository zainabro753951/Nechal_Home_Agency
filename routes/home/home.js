const mongoose = require("mongoose");
const { isAuthenticated } = require("../../middlewares/auth");
const router = require("express").Router();
const { userModel, homeAgencyModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");
router.get("/home", isAuthenticated, cache("1 seconds"), async (req, res) => {
  let data = await homeAgencyModel.find();
  let userData = await userModel.findOne({ _id: req.session.userId });
  let userImages = userData.profileImage;

  res.render("index", { data, userImages });
});

module.exports = router;
