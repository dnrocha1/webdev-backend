const express = require('express');
const router = express.Router();
const auth = require('../auth/auth.controller');

const controller = require('./user.controller');

router.route('/')
    .get(auth.authenticate, controller.getUsers)
    .post(controller.newUser)
    .delete(controller.removeAll);

router.route('/:idUser')
    .get(auth.authenticate, controller.getUserById)
    .put(auth.authenticate, auth.authById, controller.updateUser)
    .delete(auth.authenticate, controller.removeUser);

module.exports = router;