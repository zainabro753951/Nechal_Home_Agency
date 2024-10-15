const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const flash = require("connect-flash");
const session = require("express-session");
const HomeRoutes = require("./routes/home/home");
const addProperty = require("./routes/AddProp/AddProp");
const forgetpass = require("./routes/forgetPassword/forgetpass");
const profile = require("./routes/home/profile");
const FAQs = require("./routes/home/FAQ");
const signUp = require("./routes/Signup/signup");
const login = require("./routes/login/login");
const properties = require("./routes/Properties/Properties");
const booking = require("./routes/booking/booking");
const forRent = require("./routes/ForRent/forRent");
const forSale = require("./routes/forSale/forSale");
const dashboard = require("./routes/dashboard/dashboard");
const propertyInfo = require("./routes/PropertyInfo/PropertyInfo");
const contact = require("./routes/contact/contact");
const newly_listing = require("./routes/NewlyListing/newly_listing");
const logout = require("./routes/logout/logout");
const PORT = process.env.PORT || 5000;
// middleWares
app.set("view engine", "ejs");
if (process.env.NODE_ENV === "production") {
  app.set("view cache", true);
} else {
  app.set("view cache", false);
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "2006",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use((req, res, next) => {
  res.locals.message = req.flash("message");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// Routes here
app.use(HomeRoutes);
app.use(signUp);
app.use(login);
app.use(profile);
app.use(forgetpass);
app.use(addProperty);
app.use(properties);
app.use(forRent);
app.use(forSale);
app.use(FAQs);
app.use(propertyInfo);
app.use(booking);
app.use(dashboard);
app.use(contact);
app.use(newly_listing);
app.use(logout);

// listning
app.listen(PORT, () => {
  console.log(`listning on http://localhost:${PORT}`);
});
