const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { isAuthenticated } = require("../../middlewares/auth");
const { userModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");

router.post("/forgetpassword", isAuthenticated, async (req, res) => {
  let data = await userModel.findOne({ _id: req.session.userId });
  let isMatch = await bcrypt.compare(req.body.oldPassword, data.password);
  if (!isMatch) {
    let error = "Old password is incorrect";
    res.redirect(`/profile?error=${error}`);
  } else if (req.body.newPassword == req.body.confirmPassword) {
    let newHashedPassword = await bcrypt.hash(req.body.newPassword, 10);
    data.password = newHashedPassword;
    let result = await data.save();
    let success = "Your Password is changed";
    res.redirect(`/profile?success=${success}`);
  } else {
    let notMatch = "Password does not match";
    res.redirect(`/profile?notMatch=${notMatch}`);
  }
});

module.exports = router;
