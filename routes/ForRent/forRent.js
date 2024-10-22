const router = require("express").Router();
const { isAuthenticated } = require("../../middlewares/auth");
const { homeAgencyModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");

router.get(
  "/forRent",
  isAuthenticated,
  cache("5 minutes"),
  async (req, res) => {
    let data = await homeAgencyModel.find({
      PropertyStatus: "For Rent",
    });

    res.render("forRent", { data });
  }
);

module.exports = router;
