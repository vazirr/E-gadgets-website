const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};
exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjNiNDM1ZmRjMzAxOGFkNWMwNjYxOCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEzNjE1OTI1fQ.s6yDxfwbUM6VSbtCyuuBS3qNB0QEd62G5r6-qx7fEto";
  return token;
};
