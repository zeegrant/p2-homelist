const Home = require('../models/home');
const Appointment = require('../models/appointment');

module.exports = {
    new: newHome,
    create,
    index,
    showAll,
    show
};

function newHome(req, res) {
    res.render('homes/new')
}

function create(req, res) {
req.body.nowAvailable = !!req.body.nowAvailable;
const home = new Home(req.body);
home.save(function(err) {
    if (err) return res.render('home/new');
    console.log(home);
    res.redirect('home/new');
});
}

function index(req, res) {
    res.render('/index')
}

// function show(req, res) {
//     res.render('/show')
// }

function showAll(req,res) {
    Home.find({})
      .exec(function (err, homes) {
        res.render("homes/showAll", {homes})
      })
  }

  function show(req, res) {
    Home.findById(req.params.id)
      .exec((err, home) => {
        res.render("homes/show", {home})
      })
  }