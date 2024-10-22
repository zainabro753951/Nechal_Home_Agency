const mongoose = require("mongoose");
const moment = require("moment");

const { users, homeAgency } = require("./userdbConfig");
let userSchema = new mongoose.Schema({
  Fname: String,
  Lname: String,
  email: String,
  phoneNum: String,
  profileImage: {
    filename: String,
    filepath: String,
  },
  password: String,
  confirmPass: String,
});
let userModel = users.model("users", userSchema);

let homeAgencySchema = new mongoose.Schema({
  userId: String,
  PropertyStatus: String,
  propertyType: String,
  buitlYear: Number,
  country: String,
  propertyCondition: String,
  dimensions: String,
  city: String,
  propertyName: String,
  discription: String,
  image: {
    imgFilename: String,
    imgFilepath: String,
  },
  aria: Number,
  price: Number,
  unit: String,
  currency: String,
  bedrooms: Number,
  bathrooms: Number,
  dyningrooms: Number,
  belconey: Number,
  otherFeatures: [String],
  cityDistance: String,
  shopDistance: String,
  hospitalDistance: String,
  parkDistance: String,
  fullName: String,
  email: String,
  desination: String,
  phoneNum: String,
  facebookLink: String,
  twitterLink: String,
  profileImage: {
    proImgfilename: String,
    proImgfilepath: String,
  },
  postedAt: { type: Date, default: Date.now },
});

let homeAgencyModel = homeAgency.model("featured_properties", homeAgencySchema);

let userBookingSchema = new mongoose.Schema({
  userId: String,
  propertyId: String,
  name: String,
  email: String,
  phoneNum: String,
  propAddress: String,
  dateTime: Date,
  message: String,
  agreement: String,
  createdAt: { type: Date, default: Date.now() },
});
let userBookingModel = users.model("bookings", userBookingSchema);

let ContactUsSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNum: String,
  subject: String,
  message: String,
});
let contactUsModel = homeAgency.model("contact_reqs", ContactUsSchema);

module.exports = {
  userModel,
  userBookingModel,
  homeAgencyModel,
  contactUsModel,
};
