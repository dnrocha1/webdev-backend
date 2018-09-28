const express = require('express');
const router = express.Router();

const controller = require('./group.controller');

router.route('/')
    .get(controller.getGroups)
    .post(controller.newGroup);

router.route('/:idGroup')
    .get(controller.getGroupById)
    .put(controller.updateGroup)
    .delete(controller.removeGroup);

module.exports = router;