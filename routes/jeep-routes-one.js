const express = require('express');
const router = express.Router();
const siteOneModel= require('../models/jeep-model-one');
const siteTwoModel = require('../models/jeep-model-two');

//working!
//get all jeeps in the db for this endpoint
router.get('/', (req, res) => {
    siteOneModel.find()
    .then(data => {
        if(data.length > 0) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'There were no Jeeps found in the database for site two.'})
        }
    })
    .catch(err => console.log(err))
})







module.exports = router;