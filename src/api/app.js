const express = require('express');
const router = require('../routes/user');

const app = express();

app.use('/', router);

module.exports = app;
