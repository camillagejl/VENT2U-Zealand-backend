// Maybe not needed idk - const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

/* var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'vent2db'
});
*/

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Need the correct path here - not done yet - path is placeholder for now
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/login'));
});

// POST Request - It checks if the details are correct in the DB
app.post('/auth', function (request, response) {
    var email = request.body.email;
    var password = request.body.password;
    if (email && password) {
        connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.email = email;
                response.redirect('/home');
            } else {
                response.send('Incorrect Email and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Email and Password!');
        response.end();
    }
});

// This path gets displayed when the user successfully has logged in - path is placeholder for now
app.get('/home', function (request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.name + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});