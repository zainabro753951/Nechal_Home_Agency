const router = require("express").Router();
const cache = require("../../middlewares/catch");
const { isAuthenticated } = require("../../middlewares/auth");
const { homeAgencyModel } = require("../../userdbSchema");
router.get(
  "/properties",
  isAuthenticated,
  cache("5 minutes"),
  async (req, res) => {
    let data = await homeAgencyModel.find();
    res.render("properties", { data });
  }
);

module.exports = router;
