const mongoose = require('mongoose')
// opitonal shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    // Add the 3 new properties below
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const homeSchema = new Schema({
    address: String,
    bedrooms: Number,
    bathrooms: Number,
    squareFootage: Number,
    description: String,
    price: Number,
    forSale: Boolean,
    reviews: [reviewSchema]
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Home', homeSchema)

// const Home = new mongoose.model("Home", homeSchema)

// const data = new Home({
//     address: 'address2',
//     bedrooms: 2,
//     bathrooms: 2,
//     squareFootage: 200,
//     price: 22,
//     forSale: true,
// })
// data.save()
