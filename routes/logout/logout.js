const { isAuthenticated } = require("../../middlewares/auth");

const router = require("express").Router();

router.get("/logout", isAuthenticated, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
