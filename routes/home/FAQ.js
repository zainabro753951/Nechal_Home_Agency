const { isAuthenticated } = require("../../middlewares/auth");

const router = require("express").Router();

router.get("/faqs",isAuthenticated, (req, res) => {
  res.render("faq");
});

module.exports = router;
