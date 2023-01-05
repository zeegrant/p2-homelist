const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    home: {
        address: String,
    },
    tourDate: {
        type: Date,
        default: function () {
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let result = new Date(year, month, day);
            return result;
        }
    }

});

module.exports = mongoose.model('Appointment', appointmentSchema);