const router = require("express").Router();
const { isAuthenticated } = require("../../middlewares/auth");
const cache = require("../../middlewares/catch");

router.get("/faqs", isAuthenticated, cache("5 minutes"), (req, res) => {
  res.render("faq");
});

module.exports = router;
