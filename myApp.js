import express from 'express';
// var express = require('express');
var app = express();

// first exercise
console.log('Hello World');

// second exercise
app.get('/', (req, res) => {
    console.log('This is the req param: ', req);
    res.send('Hello Express');
});

// module exports
module.exports = app;
