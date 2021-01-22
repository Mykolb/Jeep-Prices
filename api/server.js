const express = require('express');
const mongoose = require('mongoose');
const server = express();
const secrets = require('../secrets');
//import scraped files
const siteOneScrape = require('../siteOne');
const siteTwoScrape = require('../siteTwo');
//import routes
const siteOneRouter = require('../routes/jeep-routes-one');
const siteTwoRouter = require('../routes/jeep-routes-two');



server.use(express.json())
server.use('/siteOne', siteOneRouter)
server.use('/siteTwo', siteTwoRouter)


const uri = secrets.ATLAS_URI;
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



module.exports = server 