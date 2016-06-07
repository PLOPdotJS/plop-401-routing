'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errorHandler = require('./lib/error_handling');


const dbPort = process.env.MONGODB_URI || 'mongodb://localhost/plop_db';

mongoose.connect(dbPort);

const router = require('./routes/router');

app.use('/', router);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({message: 'page not found'});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is up and running on ' + dbPort);
});
