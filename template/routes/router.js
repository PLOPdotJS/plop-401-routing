'use strict';

const express = require('express');
const bodyParser = require('body-parser');


const router = module.exports = exports = express.Router();

router.get('/', (req, res, next) => {
  next();
});

router.post('/', bodyParser, (req, res, next) => {
  next();
});

router.put('/', bodyParser, (req, res, next) => {
  next();
});

router.delete('/:id', (req, res, next) => {
  next();
});
