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
        .catch(err => res.json(err))
        .then(groups => res.json(groups));
}

function getGroupById(req, res) {
    Group.findById(req.params.idGroup)
        .catch(err => res.json(err))
        .then(group => res.json(group));
}

function newGroup(req, res) {
    const group = new Group(req.body);
    group.save()
        .catch(err => res.json(err))
        .then(() => {res.json(group)});
}

module.exports = {getGroups, getGroupById, newGroup};