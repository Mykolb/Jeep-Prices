const mongoose = require('mongoose')
const Schema = mongoose.Schema

//arry of objs
//required that the details be uniqueb/c that's where the VIN is
const siteOneWranglerSchema = new Schema ({
        title: String,
        deetz: {
                type: String,
                unique: true,
        },
        img: String,
        price: String
    
})


const siteOneModel = mongoose.model('siteOne', siteOneWranglerSchema)



module.exports = siteOneModel;
