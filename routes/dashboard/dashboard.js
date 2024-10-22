const router = require("express").Router();
const { isAuthenticated } = require("../../middlewares/auth");
const { userModel, homeAgencyModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");

router.get("/dashboard", isAuthenticated, async (req, res) => {
  let userData = await userModel.findOne({ _id: req.session.userId });
  let userPropData = await homeAgencyModel.find({
    userId: req.session.userId,
  });
  let countuserPropData = await homeAgencyModel.countDocuments({
    userId: req.session.userId,
  });

  let { Fname, Lname } = userData;

  res.render("dashboard", { Fname, Lname, countuserPropData, userPropData });
});

router.delete("/deleteProducts/:propId", isAuthenticated, async (req, res) => {
  let deleteddata = await homeAgencyModel.findByIdAndDelete(req.params.propId);
  res.redirect("/dashboard");
});

module.exports = router;
