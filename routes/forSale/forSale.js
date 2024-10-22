const router = require("express").Router();
const { isAuthenticated } = require("../../middlewares/auth");
const { homeAgencyModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");
router.get(
  "/forSale",
  isAuthenticated,
  cache("5 minutes"),
  async (req, res) => {
    let data = await homeAgencyModel.find({
      PropertyStatus: "For Sale",
    });

    res.render("forSale", { data });
  }
);

module.exports = router;
