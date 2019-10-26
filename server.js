const express = require('express');
const path = require('path');
const app = new express();

app.use(express.static(__dirname + '/images'))
app.use(express.static(__dirname + '/style'))

app.get('/' ,(req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(process.env.PORT || 8080)