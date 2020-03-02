const mongoose  = require('mongoose');
const User      = mongoose.model('User');

// Function handling request to access account information for a user
module.exports.accountRead = function(request, response) {

    // If the user is not signed in, they are unauthorized to view account information
    if (!request.payload._id) {
        response.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    }
    // Otherwise, if the user is signed in, retrieve their account information using the id 
    else {
        User
        .findById(request.payload._id)
        .exec(function(error, user) {
            response.status(200).json(user);
        });
    }
};

module.exports.updateAccountDetails = function(request, response) {
    console.log('received the request');
    console.log(request.body);
    response.status(200)
}