const mongoose = require('mongoose')
const Schema = mongoose.Schema


const favesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
title: {
    type: String,
    required: true,
    trim: true,
    unique: false,
},
deetz: {
    type: String,
    required: true,
    unique: true,
    trim: true,
},
img: {
    type: String,
    required: true,
    trim: true

},
price: {
    type: String,
    required: false,
    unique: false,
    trim: true,
}
})

const FaveModel = mongoose.model('Fave Model', favesSchema)

module.exports = FaveModel;