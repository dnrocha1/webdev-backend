/* const grupo_exemplo = {
    id: 1,
    nome: "Galera do Lab",
    categoria: "Empresa",
    membros: [
        {id: 1, nome: "João"},
        {id: 2, nome: "Maria"},
        {id: 3, nome: "Felipe"}
    ],
}; */
const Group = require('./group.model');

function getGroups(req, res) {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.json(err));
}

function getGroupById(req, res) {
    Group.findById(req.params.idGroup)
        .then(group => res.json(group))
        .catch(err => res.json(err));
}

function newGroup(req, res) {
    const group = new Group(req.body);
    group.save()
        .then(() => res.json(group))
        .catch(err => res.json(err));
}

function updateGroup(req, res) {
    Group.findOneAndUpdate({_id: req.params.idGroup}, req.body, {new: true})
        .then((group) => res.json(group))
        .catch((err) => res.json(err));
}

function removeGroup(req, res) {
    Group.findOneAndDelete({_id: req.params.idGroup}, {rawResult: true})
        .then((group) => res.json(group.value))
        .catch((err) => res.json(err));
}

function addMember(member) {
    return Group.findOneAndUpdate({_id: member.group}, {$addToSet: {members: member}}, {new: true});
}

module.exports = {getGroups, getGroupById, newGroup, updateGroup, removeGroup, addMember};