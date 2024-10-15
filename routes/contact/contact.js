const router = require("express").Router();
const { contactUsModel } = require("../../userdbSchema");
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.post("/contact", async (req, res) => {
  let dataEntry = contactUsModel(req.body);
  let result = await dataEntry.save();
  console.log(result);
  res.render("contact", { message: "Your Message Successfully sended" });
});

module.exports = router;
