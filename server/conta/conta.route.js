const express = require('express');
const router = express.Router();

const controller = require('./conta.controller');

router.get('/', controller.get);
router.get('/:id', controller.get);
router.post('/', controller.post);

module.exports = router;