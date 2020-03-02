const mongoose = require('mongoose');
const User = mongoose.model('User');

// Function handling the return from Trello authorization
module.exports.trelloConnect = function (request, response) {

    // If the user is not signed in, they are unauthorized to connect to Trello
    if (!request.payload._id) {
        response.status(401).json({
            'message': 'UnauthorizedError: must be signed in to connect Trello'
        });
    }
    // Otherwise, if the user is signed in, store their Trello auth token
    else {
        User
            .findById(request.payload._id)
            .exec(function (error, user) {
                user.setTrelloConnection(request.body.token);
                user.save(function (error, user) { 
                    if (error) { return error }
                    else {
                        // do nothing
                    }
                });
            });
    }
    response.status(200).json(user);
}

module.exports.trelloConnectStatus = function (request, response) {

    // If the user is not signed in, they are unauthorized to connect to Trello
    if (!request.payload._id) {
        response.status(401).json({
            'message': 'UnauthorizedError: must be signed in to get Connect details'
        });
    }
    // Otherwise, if the user is signed in, store their Trello auth token
    else {
        User
            .findById(request.payload._id)
            .exec(function (error, user) {
                response.status(200).json(user);
            });
    }

}

module.exports.trelloSync = function (request, response) {
    console.log('From trello sync');
}