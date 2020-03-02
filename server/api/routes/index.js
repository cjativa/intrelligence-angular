const express   = require('express');
const router    = express.Router();
const jwt       = require('express-jwt');

const config    = require('../../config');

const SECRET    = config.SECRET;

const auth      = jwt({
    secret:         SECRET,
    userProperty:   'payload'
});

// Access controllers for our routes
const accountController = require('../controllers/account');
const profileController = require('../controllers/profile');
const authController    = require('../controllers/authentication');
const trelloController  = require('../controllers/trello');

// Profile route
router.get('/profile', auth, profileController.profileRead);
router.post('/profile', auth, profileController.updateProfileDetails);

// Authentication route
router.post('/signUp', authController.signUp);
router.post('/login', authController.login);

// Account routes
router.get('/account', auth, accountController.accountRead);
router.post('/account', auth, accountController.updateAccountDetails);

// Trello routes
router.post('/trelloConnect', auth, trelloController.trelloConnect);
router.get('/connect', auth, trelloController.trelloConnectStatus);
router.get('/trelloSync', auth, trelloController.trelloSync);



module.exports = router;