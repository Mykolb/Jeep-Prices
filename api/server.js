const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');
require('dotenv').config();
//import scraped files
const siteOneScrape = require('../siteOne');
const siteTwoScrape = require('../siteTwo');
//import routes
const siteOneRouter = require('../routes/jeep-routes-one');
const siteTwoRouter = require('../routes/jeep-routes-two');
const favoriteRouter = require('../routes/fave-routes');


server.use(express.json())
server.use(cors())
server.use('/siteOne', siteOneRouter)
server.use('/siteTwo', siteTwoRouter)
server.use('/my-favorites', favoriteRouter)


const uri = process.env.ATLAS_URI;
console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.set('debug', true);

//logs once db is connected
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('The MongoDB db was connected successfully')
})


//get request 
server.get('/', (req, res) => {
    res.send(`It's Alive!`)
})



module.exports = server;