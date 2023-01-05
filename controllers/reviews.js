const Home = require('../models/home');

module.exports = {
    create,
    delete: deleteReview
}

function create(req, res) {
    Home.findById(req.params.id, function(err, home) {
      
         // Add the user-centric info to req.body (the new review)
         req.body.user = req.user._id;
         req.body.userName = req.user.name;
         req.body.userAvatar = req.user.avatar;

            // Push the subdoc for the review
        home.reviews.push(req.body)
        // Save any changes made to the movie doc
        home.save(function(err) {
            res.redirect(`/homes/${home._id}`)
        })
    })
}

function deleteReview(req, res, next) {
  Home.findOne({'reviews._id': req.params.id}).then(function(home) {
    const review = home.reviews.id(req.params.id);
    if (!review.user.equals(req.user._id)) return res.redirect(`/home/${home._id}`);
    review.remove();
    home.save().then(function() {
        res.redirect(`/home/${home._id}`);
    }).catch(function(err) {
        return next(err);
    });
  });
}