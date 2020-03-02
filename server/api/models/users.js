const mongoose  = require('mongoose');
const crypto    = require('crypto');
const jwt       = require('jsonwebtoken');
const config    = require('../../config');

const SECRET = config.SECRET;

/* Define our User Schema */
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        require: false
    },
    about: {
        type: String,
        required: false
    },
    trello_connected: {
        type: Boolean,
        default: false,
        required: false,
    },
    trello_token: {
        type: String,
        required: false
    },
    hash: String,
    salt: String
});

// Function available to our User Schema for creating the salt/hash pair to a new user's password
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.updateProfileDetails = function(name, email, about) {
    this.name   = name;
    this.email  = email;
    this.about  = about;
}

// Function available to our User Schema for validating an entered password hash against the stored hash
userSchema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
}

userSchema.methods.setTrelloConnection = function(token) {
    this.trello_connected = true;
    this.trello_token = token;
}

// Function available to our User Schema for generating a new json web token    
userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id:    this._id,
        email:  this.email,
        name:   this.name,
        exp:    parseInt(expiry.getTime() / 1000),
    }, SECRET);
};

mongoose.model('User', userSchema);