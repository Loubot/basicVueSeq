var passport = require('passport');
var LocalStrategy = require('passport-local');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
var db = require('../models');
const User = db.users

passport.use(new LocalStrategy(function verify(email, password, cb) {
  User.get('SELECT * FROM users WHERE email = ?', [ email ], function(err, row) {
    if (err) { return cb(err); }
    if (!row) { return cb(null, false, { message: 'Incorrect email or password.' }); }

    crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect email or password.' });
      }
      return cb(null, row);
    });
  });
}));