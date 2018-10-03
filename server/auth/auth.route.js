const express = require('express');
const router = express.Router();

const controller = require('./auth.controller');

router.route('/')
    .post(controller.login);

module.exports = router;