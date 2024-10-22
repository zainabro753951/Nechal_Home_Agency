const router = require("express").Router();
const { contactUsModel } = require("../../userdbSchema");
const { isAuthenticated } = require("../../middlewares/auth");
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.post("/contact", isAuthenticated, async (req, res) => {
  let dataEntry = contactUsModel(req.body);
  let result = await dataEntry.save();
  res.render("contact", { message: "Your Message Successfully sended" });
});

module.exports = router;
