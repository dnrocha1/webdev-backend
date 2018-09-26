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

module.exports = {getGroups, getGroupById, newGroup};