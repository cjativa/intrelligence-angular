/* Configurations for our passport setup */
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const mongoose      = require('mongoose');
const User          = mongoose.model('User');

// Locate a user given the email
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (username, password, done) {
        
        // Find a user with the given email address
        User.findOne({ email: username }, function (err, user) {
            if (err) { 
                return done(err); }

            // Return if there's no user found in the database
            if (!user) {
                return done(null, false, {
                    message: 'User not found'
                });
            }

            // Return if the provided password is wrong
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Password is wrong'
                });
            }

            // If the credentials are correct, return the user object
            return done(null, user);
        });
    }
));