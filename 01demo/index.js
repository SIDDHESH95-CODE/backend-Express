// console.log("Hello...!");

//   Creating Server..    //

// New way..
// import 'dotenv/config'
// import express from "express";

// Old way..
require('dotenv').config()
const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("<h1>Welcome to ExpressJS demo Home page!</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Hello, YouTube..<h2>")
})

app.get('/login', (req, res) => {
    res.send("<h2>Login Page<h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`app is listening on port: ${port}`);
})