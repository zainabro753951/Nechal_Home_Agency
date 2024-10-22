const router = require("../dashboard/dashboard");
const { homeAgencyModel } = require("../../userdbSchema");
const { isAuthenticated } = require("../../middlewares/auth");
router.get("/newly_listing", isAuthenticated, async (req, res) => {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);
  const data = await homeAgencyModel.find({
    postedAt: { $gte: now },
  });
  res.render("newlyListed", { data });
});

module.exports = router;
