"use strict"
const express = require('express')
const np = require('path')
let app = express()

//  middleware. it does something
//  usually sets some properties on req
//  calls next() when done
app.use("/foo", (req, res, next) => {
    req.random = Math.random() * 10
    next()
})

//  services a request dynamically
app.use("/foo", (req, res) => {
    res.send("Hello dynamic shit " + req.random)
})

//  static serving of website
app.use(express.static(np.join(__dirname, "www")))

app.listen(3000)

//form submission