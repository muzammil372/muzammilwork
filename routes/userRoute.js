const express = require('express');
const {getAllusers} = require('../controller/userController');

const route = express.Router()

route.get('/', getAllusers);

module.exports = route ;