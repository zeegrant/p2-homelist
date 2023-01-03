const express = require('express')
const router = express.Router()
// You Do - Require the yet to be created reviews controller 
const reviewsCtrl = require('../controllers/reviews')

// You Do - Define the Route below
router.post('/movies/:id/reviews', reviewsCtrl.create);

router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router