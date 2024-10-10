const router = require("express").Router();
const { isAuthenticated } = require("../../middlewares/auth");
const { userModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");
router.get(
  "/profile",
  isAuthenticated,
  cache("5 minutes"),
  async (req, res) => {
    let { notMatch, success, error } = req.query;
    let data = await userModel.findOne({ _id: req.session.userId });
    let {
      Fname,
      Lname,
      email,
      phoneNum,
      profileImage: { filename, filepath },
    } = data;
    res.render("profile", {
      Fname,
      Lname,
      email,
      phoneNum,
      filepath,
      notMatch,
      success,
      error,
    });
  }
);

module.exports = router;
