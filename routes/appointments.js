var express = require('express');
var router = express.Router();
const appointmentCtrl = require('../controllers/appointment');
const isLoggedIn = require('..config/auth')

router.get('/appointment/new', isLoggedIn, appointmentCtrl.new)