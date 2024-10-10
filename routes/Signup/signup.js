const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { isNotAuthenticated } = require("../../middlewares/auth");
const { userModel } = require("../../userdbSchema");
const userPicUploads = require("../../userMulter");

// routes
router.get("/signup", isNotAuthenticated, (req, res) => {
  let message = null;
  let password = null;
  res.render("signup", { message, password });
});

router.post(
  "/signup",
  userPicUploads.single("profileImage"),
  async (req, res) => {
    let { Fname, Lname, email, phoneNum, password, confirmPass } = req.body;
    let filepath = req.file.path.slice(7);

    let profileImage = {
      filename: req.file.filename,
      filepath: filepath,
    };
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      let message = "email is already registered";
      let password = null;
      return res.render("signup", { message, password });
    }
    if (password == confirmPass) {
      try {
        const hashPassword = await bcrypt.hash(password, 10);
        let data = new userModel({
          Fname: Fname,
          Lname: Lname,
          email: email,
          profileImage: profileImage,
          phoneNum: phoneNum,
          password: hashPassword,
          confirmPass: hashPassword,
        });
        let result = await data.save();
        res.redirect("/");
      } catch (err) {
        if (err === 11000) {
          res.redirect(`/signup`);
        }
      }
    } else {
      let password = "password does not match";
      message = null;
      return res.render("signup", { password, message });
    }
  }
);

module.exports = router;
