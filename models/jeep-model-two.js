const mongoose = require('mongoose')
const Schema = mongoose.Schema

const siteTwoWranglerSchema = new Schema ({
    title: String,
    deetz: {
        type: String,
        unique: true,
    },
    img: String,
    listPrice:  String,
    monthlyPrice: String,
    mileage: String
})

const siteTwoModel = mongoose.model('siteTwo', siteTwoWranglerSchema)

module.exports = siteTwoModel;
