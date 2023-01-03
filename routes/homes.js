var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/movies');
const isLoggedIn = require('../config/auth');

// GET /movies - show all movied
router.get('/', moviesCtrl.index)

// GET /movies/new - new movie form
router.get('/new', isLoggedIn, moviesCtrl.new)

// GET /movies/id - show details of a single movie
router.get('/:id', moviesCtrl.show)

// POST /movies - add new movie
router.post('/', isLoggedIn, moviesCtrl.create)

module.exports = router;
