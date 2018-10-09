const express = require('express');
const router = express.Router();
const auth = require('../auth/auth.controller');

const controller = require('./user.controller');

router.route('/')
    .get(auth.authenticate, controller.getUsers)
    .post(controller.newUser);

router.route('/:idUser')
    .get(controller.getUserById)
    .put(controller.updateUser)
    .delete(controller.removeUser);

module.exports = router;