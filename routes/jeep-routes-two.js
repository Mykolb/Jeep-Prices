const express = require('express');
const router = express.Router();
const siteTwoModel = require('../models/jeep-model-two');



//get all jeeps in db for this other endpoint
router.get('/', (req, res) => {
    siteTwoModel.find()
    .then(data => {
        if(data.length > 0) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'There were no Jeeps found in the database for site one.'})
        }
    })
    .catch(err => console.log(err))
})


module.exports = router;