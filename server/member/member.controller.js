const Member = require('./member.model');

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
        .then(() => res.json(member))
        .catch(err => res.json(err));
}

module.exports = {getMembers, getMemberById, newMember};