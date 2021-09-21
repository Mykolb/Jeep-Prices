const router = require('express').Router();
const FaveModel = require('../models/faves-model');
const mongoose = require('mongoose');


//get all favorites
router.get('/', (req, res) => {
    FaveModel.find()
    .then(favorites => {
        if(favorites.length > 0) {
            res.status(200).json(favorites)
        }else {
            res.status(404).json({ message: 'There are no trucks saved in Favorites.'})  
        }
    })
    .catch(err => console.log(err))
})


//add a favorite
router.post('/', (req, res) => {
    // const student_info = req.body

    const faves = new FaveModel({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        deetz: req.body.deetz,
        img: req.body.img,
        price: req.body.price,
    })

    FaveModel.create(faves)
    .then(faves => {
        if(faves) {
            res.status(201).json({message: 'Truck has been added to Favorites!'})
    } else {
        res.status(500).json({message: 'Unable to add the truck to Favorites.'})
    }
    })
    .catch(err => console.log(err))
})


//delete favorite by id
router.delete('/:id', (req, res) => {
    const id = req.params.id

     FaveModel.remove({_id: id})
     .exec()
     .then(faves => {
        if(faves) {
            res.status(201).json({faves, message: 'The truck was successfully deleted.'})
    } else {
        res.status(404).json({message: 'The truck associated with this id cannot be found.'})
    }
}) 
.catch(err => console.log(err))
})



module.exports = router;