const mongoose = require("mongoose");
let users = mongoose.createConnection("mongodb://localhost:27017/user_db");
let homeAgency = mongoose.createConnection(
  "mongodb://localhost:27017/home_agency"
);
module.exports = { users, homeAgency };
