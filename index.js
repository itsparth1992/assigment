const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const fileUpload = require('express-fileupload');
var flash = require('express-flash');
// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// default option
app.use(fileUpload());

// Static Files
app.use(express.static('public'));
app.use(express.static('upload'));

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// parse request data content type application/json
app.use(bodyParser.json());

// path from where to use css and javascript
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs');

// define route for pages
app.use('/', require('./src/routes/pages'))

// define route for pages
app.use('/auth', require('./src/routes/auth'))

// define api routes
const routes = require('./src/routes');

// call routes
app.use('/api', routes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});