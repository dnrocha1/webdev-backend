const Member = require('./member.model');
const userController = require('../user/user.controller');
const groupController = require('../group/group.controller');

function getMembers(req, res) {
    Member.find()
        .then(members => res.json(members))
        .catch(err => res.json(err));
}

function getMemberById(req, res) {
    Member.findById(req.params.idMember)
        .then(member => res.json(member))
        .catch(err => res.json(err));
}

function newMember(req, res) {
    const member = new Member(req.body);
    member.save()
        .then(() => {
            Promise.all([ userController.addMember(member), groupController.addMember(member) ]).then(() => res.json(member));
        })
        .catch(err => res.json(err));
}

function updateMember(req, res) {
    Member.findOneAndUpdate({_id: req.params.idMember}, req.body, {new: true})
        .then((member) => res.json(member))
        .catch((err) => res.json(err));
}

function removeMember(req, res) {
    Member.findOneAndDelete({_id: req.params.idMember}, {rawResult: true})
        .then((member) => res.json(member.value))
        .catch((err) => res.json(err));
}

module.exports = {getMembers, getMemberById, newMember, updateMember, removeMember};