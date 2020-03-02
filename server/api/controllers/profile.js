const mongoose  = require('mongoose');
const User      = mongoose.model('User');

// Function handling request to access profile information for a user
module.exports.profileRead = function(request, response) {

    // If the user is not signed in, they are unauthorized to view profiles
    if (!request.payload._id) {
        response.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    }
    // Otherwise, if the user is signed in, retrieve their profile information using the id 
    else {
        User
        .findById(request.payload._id)
        .exec(function(error, user) {
            response.status(200).json(user);
        });
    }
};

module.exports.updateProfileDetails = function(request, response) {
    console.log('received the request');
    console.log(request.body.heading);
    console.log(request.body.about)
    response.status(200)
}