"use strict";

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');


app.get('/',homeHandler);
app.get('/bad',Handlerror);


function homeHandler(req, res) {
    res.send('welcome to server.js');
}

function Handlerror(req, res) {
    throw new Error('Something went wrong');
}


app.use(errorHandler);

app.use("*", notFoundHandler);


module.exports = {
    app: app,
    start: start
}


function start(port) {
    app.listen(port, () => console.log(`Server is listening to port ${port}`));
}

