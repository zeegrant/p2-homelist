const Home = require('../models/home');
// const Appointment = require('../models/appointment');

module.exports = {
    new: newHome,
    create,
    index,
    show
};

function newHome(req, res) {
    res.render('homes/new')
}

function create(req, res) {
req.body.forSale = !!req.body.forSale;
const home = new Home(req.body);
home.save(function(err) {
    console.log(err)
    if (err) return res.render('homes/new');
    console.log(home);
    res.redirect('homes');
});
}

function index(req,res) {
    Home.find({})
      .exec(function (err, homes) {
        res.render("homes/index", {homes})
      })
  }

  function show(req, res) {
    Home.findById(req.params.id)
      .exec((err, home) => {
        res.render("homes/show", {home})
      })
  }