import express from 'express';
// var express = require('express');
var app = express();

// =====================================================================================================================
// first exercise
console.log('Hello World');

// =====================================================================================================================
// second exercise
//app.get('/', (req, res) => {
//console.log('This is the req param: ', req);
//res.send('Hello Express');
//});

// =====================================================================================================================
// third exercise: serving an html file
const indexHtml = __dirname + '/views/index.html';
app.get('/', (_, res) => {
    res.sendFile(indexHtml);
});

// =====================================================================================================================
// 4th exercise: Serve static files using express.static middleware
const staticFolder = __dirname + '/public';
const middlewareFunc = express.static(staticFolder);
app.use(middlewareFunc); // mount the middleware function

// =====================================================================================================================
// 5th exercise: creating a rest endpoint and passing a json

app.get('/json', (_, res) => {
    const data = { message: 'Hello json' };
    res.json(data);
});

// =====================================================================================================================
// module exports
module.exports = app;
