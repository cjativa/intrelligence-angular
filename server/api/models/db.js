// Bring in mongoose library
const mongoose = require('mongoose');

// Bring in credentials for database
const config = require('../../config');

// URI to our Mongo database
const dbURI = 'mongodb://' + config.DB_USER + ':' + config.DB_PW + '@ds011893.mlab.com:11893/intrelligence';

// Connect to the instance
mongoose.connect(dbURI);

// Bring in schema and models
require('./users');