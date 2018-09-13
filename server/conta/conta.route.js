const express = require('express');
const router = express.Router();

const controller = require('./conta.controller');

router.route('/')
    .get(controller.getConta)
    .post(controller.novaConta);

router.route('/:idConta')
    .get(controller.getContaById);

module.exports = router;