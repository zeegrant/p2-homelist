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

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
        }
    },
    mpaaRating: String,
    cast: [{type: Schema.Types.ObjectId, ref: 'Performer'}],
    nowShowing: {type: Boolean, default: false},
    reviews: [reviewSchema]
}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema)