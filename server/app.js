const dotenv = require('dotenv')
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:'./config.env' });
require('./db/conn');

app.use(express.json());

//link router file to make our route easy
app.use(require('./router/auth'));

//const User = require('./model/userSchama');

const PORT = process.env.PORT;
  
//middleware
const middleware = (req, res, next) => {
    console.log('Middleware of server');
    next();
}

//app.get('/', (re, res) => {
//    res.send('Hello server');
//});

app.get('/about', middleware, (re, res) => {
    res.send('Hello this is about server');
});

app.get('/contact', (re, res) => {
    //res.cookie("Token cookie test", 'mak');
    res.send('Hello this is server conntact');
});

app.get('/signin', (re, res) => {
    res.send('Hello this is server signin page');
});

app.get('/signup', (re, res) => {
    res.send('Hello server signup page');
});

app.listen(PORT, () => {
    console.log(`server online at port ${PORT}`);
})


