const express = require('express')
const router = express.Router()
const siteOneWranglerSchema = require('../models/jeep-model-one')


router.get('/siteOne', (req, res) => {
    siteOneWranglerSchema.find()
    .then(data => {
        if(info.length < 0) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'There were no cars found in the database for site one.'})
        }
    })
    .catch(err => console.log(err))
})









// router.get('/siteTwo', (req, res) => {
//     siteTwoModel.find()
//     .then(info => {
//         if(info.length < 0) {
//             res.status(200).json(info)
//         } else {
//             res.status(400).json({ message: 'There were no cars found in the database for site two.'})
//         }
//     })
//     .catch(err => console.log(err))
// })




module.exports = router;