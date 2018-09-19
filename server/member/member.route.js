const express = require('express');
const router = express.Router();

const controller = require('./member.controller');

router.route('/')
    .get(controller.getMembers)
    .post(controller.newMember);

router.route('/:idMember')
    .get(controller.getMembersById);

module.exports = router;