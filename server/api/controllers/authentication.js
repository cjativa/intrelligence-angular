const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJSONresponse = function (response, status, content) {
    response.status(status);
    response.json(content);
};

/** Handle request for a user signing up **/
module.exports.signUp = function (request, response) {
    // For a user signing up, create new User instance
    const user = User();

    // Get the relevant user information from the request - name and email
    user.name = request.body.name;
    user.email = request.body.email;

    // Store the password for the user (i.e. salt and hash)
    user.setPassword(request.body.password);

    // Save this user we've created
    user.save(function (error) {
        let token;
        token = user.generateJwt();

        response.status(200);
        response.json({
            'token': token
        });
    });
};

/** Handle request for a user logging in **/
module.exports.login = function (request, response) {

    passport.authenticate('local', function (error, user, info) {
        let token;

        // If Passport throws/catches an error
        if (error) {
            response.status(404).json(error);
        }

        // If a user is located
        if (user) {
            token = user.generateJwt();
            response.status(200);
            response.json({
                'token': token
            });
        }
        // If a user is not found
        else {
            response.status(401).json(info);
        }
    })(request, response);

};