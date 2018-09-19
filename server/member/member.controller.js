const Member = require('./member.model');

function getMembers(req, res) {
    Member.find()
        .then(members => res.json(members))
        .catch(err => res.send(err));
}

function getMembersById(req, res) {
    Member.findById(req.params.idMember)
        .then(member => json(member))
        .catch(err => res.send(err));
}

function newMember(req, res) {
    const member = new Member(req.body);
    member.save()
        .then(() => {res.json(member)})
        .catch(err => res.send(err));
}

module.exports = {getMembers, getMembersById, newMember};