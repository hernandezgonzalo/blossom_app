const passport = require("passport");
const model = require("../models/User");

// Requirement of strategies
require("./strategies/local");

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  console.log("deserializing user");
  User.findById(id)
    .then(user => cb(null, user))
    .catch(e => cb(err));

  User.findById(id, (err, user) => {
    if (err) {
      return c;
    }
    cb(null, user);
  });
});

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
};
