const express = require('express');
const bodyPaser = require('body-parser');

const mainRoute = require('./routes/main');
const adminRoute = require('./routes/admin');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyPaser.json({type: 'application/json'}));
app.use(bodyPaser.urlencoded({ extended: true }));

app.use('/home', mainRoute);
app.use('/admin', adminRoute);


module.exports = app;