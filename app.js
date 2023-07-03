// import the express module
const express = require('express');
// create the express app
const app=  express();
app.set ('view engine','ejs');
// define the port

const connectDB = require('./server/db');
connectDB();





const port = 5000
// define the listening port
// define your route
app.get('/', (req, res) => {
    // res.send('Hello everyone')
    res.render('index')
})
app.listen(port, () => {
    console.log(`App is listening port ${port}`);
})