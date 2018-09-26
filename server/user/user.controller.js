const User = require('./user.model');

function getUsers(req, res) {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
}

function getUserById(req, res) {
    User.findById(req.params.idUser)
        .then(user => res.json(user))
        .catch(err => res.json(err));
}

function newUser(req, res) {
    const user = new User(req.body);
    user.save()
        .then(() => res.json(user))
        .catch(err => res.json(err));
}

function updateUser(req, res) {
    User.findOneAndUpdate({_id: req.params.idUser}, req.body)
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
}

module.exports = {getUsers, getUserById, newUser, updateUser};