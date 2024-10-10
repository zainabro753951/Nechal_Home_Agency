const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { isAuthenticated } = require("../../middlewares/auth");
const { userModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");

router.post(
  "/forgetpassword",
  isAuthenticated,
  cache("5 minutes"),
  async (req, res) => {
    let data = await userModel.findOne({ _id: req.session.userId });
    let isMatch = await bcrypt.compare(req.body.oldPassword, data.password);
    if (!isMatch) {
      res.redirect(
        `/profile?error=${encodeURIComponent("Old password is incorrect")}`
      );
    }
    if (req.body.newPassword == req.body.confirmPassword) {
      let newHashedPassword = await bcrypt.hash(req.body.newPassword, 10);
      data.password = newHashedPassword;
      let result = await data.save();
      res.redirect(
        `/profile?success=${encodeURIComponent("Your Password is changed")}`
      );
    } else {
      res.redirect(
        `/profile?notMatch=${encodeURIComponent("Password does not match")}`
      );
    }
  }
);

module.exports = router;
