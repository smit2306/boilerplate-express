import express from 'express';
import * as dotenv from 'dotenv';
// for using .env files
dotenv.config();

// var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
app.use(rootLogger); // mounting the root logger

// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */
console.log('Hello World');

/** 2) A first working Express Server */
// app.get('/', (req, res) => {
//     console.log('This is the req param: ', req);
//     res.send('Hello Express');
// });

/** 3) Serve an HTML file */
const indexHtml = __dirname + '/views/index.html';
app.get('/', (_, res) => {
    res.sendFile(indexHtml);
});

/** 4) Serve static assets  */
const staticFolder = __dirname + '/public';
const middlewareFunc = express.static(staticFolder);
app.use(middlewareFunc); // mount the middleware function

/** 5) serve JSON on a specific route */
// app.get('/json', (_, res) => {
//     const data = { message: 'Hello json' };
//     res.json(data);
// });

/** 6) Use the .env file to configure the app */
app.get('/json', (_, res) => {
    let data = { message: 'Hello json' };
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        data.message = data.message.toUpperCase();
    }
    res.json(data);
});

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
var rootLogger = (req, res, next) => {
    let message = req.method + ' ' + req.path + ' - ' + req.ip;
    console.log(message);
    next();
};

/** 8) Chaining middleware. A Time server */

/** 9)  Get input from client - Route parameters */

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

// module exports
module.exports = app;
//---------- DO NOT EDIT BELOW THIS LINE --------------------
