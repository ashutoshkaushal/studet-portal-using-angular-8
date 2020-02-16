const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const fs = require('fs');
const multer = require('multer');
const router = express.Router();


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// API file for interacting with MongoDB
const api = require('./server/router/api');
//const apiencode = require('./server/router/apiencode');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/studentportal')));

// API location
app.use('/api', api);
//app.use('/apiencode', apiencode);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/studentportal/index.html'));
});

//Set Port
const port = process.env.PORT || '4000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));