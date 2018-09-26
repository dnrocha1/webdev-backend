const express = require('express');
const router = express.Router();

const controller = require('./user.controller');

router.route('/')
    .get(controller.getUsers)
    .post(controller.newUser);

router.route('/:idUser')
    .get(controller.getUserById)
    .put(controller.updateUser);

module.exports = router;