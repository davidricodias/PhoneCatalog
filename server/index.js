const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/phones.js');


// Config mongoose connection
const mongo_url = 'mongodb+srv://davidricodias:phonecatalog123@phonecatalog.fiz8a.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongo_url);
database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// Init app
const app = express();

// Allows CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());
app.use('/phones', routes); // Redirect the phones route to the routes middleware

app.listen(3001, () => {
    console.log("Server working on port ", 3001)
});