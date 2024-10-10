// Middleware to check if user is logged in
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect("/");
}

// Middleware to check if user is not logged in
function isNotAuthenticated(req, res, next) {
  if (!req.session.userId) {
    return next();
  }
  res.redirect("/home");
}

module.exports = { isAuthenticated, isNotAuthenticated };
