const Member = require('./member.model');

function getMembers(req, res) {
    Member.find()
        .catch(err => res.json(err))
        .then(members => res.json(members));
}

function getMemberById(req, res) {
    Member.findById(req.params.idMember)
        .catch(err => res.json(err))
        .then(member => res.json(member));
}

function newMember(req, res) {
    const member = new Member(req.body);
    member.save()
        .catch(err => res.json(err))
        .then(() => {res.json(member)});
}

module.exports = {getMembers, getMemberById, newMember};