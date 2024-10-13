const router = require("express").Router();
const cache = require("../../middlewares/catch");
const { homeAgencyModel } = require("../../userdbSchema");
const upload = require("../../multerconfig");
const { isAuthenticated } = require("../../middlewares/auth");

router.get("/addProperty", cache("5 minutes"), (req, res) => {
  let successAdd = req.query.successAdd;
  res.render("addProperty", { successAdd });
});

router.post(
  "/submit",
  isAuthenticated,
  upload.fields([{ name: "image" }, { name: "profileImage" }]),
  async (req, res) => {
    let images = req.files;
    let { image, profileImage } = images;
    // imageflies
    let [imageObj] = image;
    let imgfilename = imageObj.filename;
    let imgfilepath = imageObj.path.slice(6);
    // profileImages
    let [profileObj] = profileImage;
    let profileImgfilename = profileObj.filename;
    let profileImgfilepath = profileObj.path.slice(6);

    let userId = req.session.userId;
    let newData = new homeAgencyModel({
      userId: userId,
      PropertyStatus: req.body.PropertyStatus,
      propertyType: req.body.propertyType,
      buitlYear: req.body.buitlYear,
      country: req.body.country,
      propertyCondition: req.body.propertyCondition,
      dimensions: req.body.dimensions,
      city: req.body.city,
      propertyName: req.body.propertyName,
      discription: req.body.discription,
      image: {
        imgFilename: imgfilename,
        imgFilepath: imgfilepath,
      },
      aria: req.body.aria,
      price: req.body.price,
      unit: req.body.unit,
      currency: req.body.currency,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      dyningrooms: req.body.dyningrooms,
      belconey: req.body.belconey,
      otherFeatures: req.body.otherFeatures,
      cityDistance: req.body.cityDistance,
      shopDistance: req.body.shopDistance,
      hospitalDistance: req.body.hospitalDistance,
      parkDistance: req.body.parkDistance,
      fullName: req.body.fullName,
      email: req.body.email,
      desination: req.body.desination,
      phoneNum: req.body.phoneNum,
      facebookLink: req.body.facebookLink,
      twitterLink: req.body.twitterLink,
      profileImage: {
        proImgfilename: profileImgfilename,
        proImgfilepath: profileImgfilepath,
      },
    });
    let result = await newData.save();
    let successAdd = "Your Propperty Successfully Added";
    return res.redirect(`/addProperty?successAdd=${successAdd}`);
  }
);

module.exports = router;
