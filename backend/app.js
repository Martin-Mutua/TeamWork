const express = require('express');
const bodyPaser = require('body-parser');

const mainRoute = require('./routes/main');
const app = express();


app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.use('/home', mainRoute);




module.exports = app;