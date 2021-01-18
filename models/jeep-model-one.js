const mongoose = require('mongoose')
const Schema = mongoose.Schema

//arry of objs
const siteOneWranglerSchema = new Schema ({
        title: String,
        deetz: String,
        img: String,
        price: String,
    
})


const siteOneModel = mongoose.model('siteOne', siteOneWranglerSchema)



module.exports = siteOneModel;
