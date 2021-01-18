const express = require('express');
const mongoose = require('mongoose');
const server = express();
const secrets = require('../secrets');
const siteOneScrape = require('../siteOne');
//import routes
const siteOneRouter = require('../routes/jeep-routes');


server.use(express.json())
server.use('/siteOne', siteOneRouter)


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