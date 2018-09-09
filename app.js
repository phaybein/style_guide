'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    exphbs = require('express-handlebars');


/*************** 
 * 
 * INITIATE EXPRESS
 * 
 ***************/

const app = express();


/*************** 
 * 
 * MIDDLEWARE
 * 
 ***************/

// Handlebars Middleware
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// BodyParser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


/*************** 
 * 
 * SET STATIC PATH
 * 
 ***************/

app.use(express.static(path.join(__dirname, 'public')));


/*************** 
 * 
 * PORT VARIABLE
 * 
 ***************/

const port = 5000;


/*************** 
 * 
 * ROUTES
 * 
 ***************/

// Index Route
app.get('/', (req, res) => {
    const companyInfo = {
        companyName: 'Surf.',
        companyPhone1: 234
    };
    res.render('index', {
        companyName: companyInfo.companyName,
        companyPhone1: companyInfo.companyPhone1
    });
});

// About Route
app.get('/about', (req, res) => {
    res.render('about');
});

/*************** 
 * 
 * START SERVER
 * 
 ***************/

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});