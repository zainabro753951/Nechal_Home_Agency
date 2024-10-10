const router = require("express").Router();
const { isAuthenticated } = require("../../middlewares/auth");
const { homeAgencyModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");
router.get(
  "/propertyinfo/:infoId",
  isAuthenticated,
  cache("5 minutes"),
  async (req, res) => {
    let bookingSuccess = req.query.bookingSuccess;
    let infoId = req.params.infoId;
    let propertyData = await homeAgencyModel.findOne({ _id: infoId });
    let message = req.flash("message");
    console.log(message);

    res.render("propertyInfo", {
      propertyData,
      message,
      infoId,
      bookingSuccess,
    });
  }
);

module.exports = router;
