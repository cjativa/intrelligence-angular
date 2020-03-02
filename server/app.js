/* Setup our server dependencies */
const express       = require('express');
const path          = require('path');
const cookieParser = require('cookie-parser');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const passport      = require('passport');

// Bring in our data model
require('./api/models/db');

// Bring in our passport configuration after the model has been defined
require('./api/config/passport');

// Bring in the available routes for our API
const routesApi = require('./api/routes/index');

const app = express();

// Libraries use by our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Initialize Passport
app.use(passport.initialize());

// Serve our Angular dist directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the api routes when the path begins with /api
app.use('/api', routesApi);

// Redirect any refresh or manual route navigations to index where Anguluar router will handle it
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
  });



let server = app.listen(process.env.PORT || 8080, function () {
        let port = server.address().port;
    console.log("App now running on port", port);
});