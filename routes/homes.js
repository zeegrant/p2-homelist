var express = require('express');
var router = express.Router();
const homesCtrl = require('../controllers/homes');
const isLoggedIn = require('../config/auth');


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// GET /movies - show all movies
router.get('/', homesCtrl.index)

// GET /homes/new - new home form
router.get('/new', isLoggedIn, homesCtrl.new)

// GET /homes/id - show details of all homes
router.get('/showAll', homesCtrl.showAll)

// GET /homes/id - show details of a single homes
// router.get('/:id', homesCtrl.show)

// POST /homes - add home
// router.post('/', isLoggedIn, homesCtrl.create)

module.exports = router;
