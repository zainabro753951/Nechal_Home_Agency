const router = require("../dashboard/dashboard");
const { homeAgencyModel } = require("../../userdbSchema");

router.get("/newly_listing", async (req, res) => {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);
  const data = await homeAgencyModel.find({
    postedAt: { $gte: now },
  });
  res.render("newlyListed", { data });
});

module.exports = router;
