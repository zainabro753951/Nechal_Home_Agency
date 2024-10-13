const router = require("express").Router();
const { isAuthenticated } = require("../../middlewares/auth");
const { homeAgencyModel } = require("../../userdbSchema");
const cache = require("../../middlewares/catch");
router.get("/propertyinfo/:infoId", isAuthenticated, async (req, res) => {
  let bookingSuccess = req.query.bookingSuccess;
  let infoId = req.params.infoId;
  let propertyData = await homeAgencyModel.findOne({ _id: infoId });

  res.render("propertyInfo", {
    propertyData,
    infoId,
    bookingSuccess,
  });
});

module.exports = router;
