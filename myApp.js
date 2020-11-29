import express from 'express';
// var express = require('express');
var app = express();

// first exercise
console.log('Hello World');

// second exercise
//app.get('/', (req, res) => {
//console.log('This is the req param: ', req);
//res.send('Hello Express');
//});

// third exercise: serving an html file
const indexHtml = __dirname + '/views/index.html';
app.get('/', (_, res) => {
    res.sendFile(indexHtml);
});
// module exports
module.exports = app;
