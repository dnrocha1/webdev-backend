const User = require('./user.model');

function getUsers(req, res) {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.send(err));
}

function getUserById(req, res) {
    User.findById(req.params.idUser)
        .then(user => json(user))
        .catch(err => res.send(err));
}

function newUser(req, res) {
    const user = new User(req.body);
    user.save()
        .then(() => {res.send(user)})
        .catch(err => res.send(err));
}

module.exports = {getUsers, getUserById, newUser};