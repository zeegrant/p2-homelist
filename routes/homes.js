var express = require('express');
var router = express.Router();
const homesCtrl = require('../controllers/homes');
const isLoggedIn = require('../config/auth');


// GET /movies - show all movies
router.get('/', homesCtrl.index)

// GET /homes/new - new home form
router.get('/new', isLoggedIn, homesCtrl.new)

// GET /homes/id - show details of all homes
// router.get('/showAll', homesCtrl.showAll)

// GET /homes/id - show details of a single home
router.get('/:id', homesCtrl.show)

// POST /homes - add home
router.post('/', homesCtrl.create)

//PUT/homes - edit a home
router.put('/:id', isLoggedIn, homesCtrl.update)

router.get('/:id/edit', isLoggedIn, homesCtrl.edit)


module.exports = router;
