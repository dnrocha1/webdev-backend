const User = require('./user.model');

function getUsers(req, res) {
    User.find()
        .catch(err => res.json(err))
        .then(users => res.json(users));
}

function getUserById(req, res) {
    User.findById(req.params.idUser)
        .catch(err => res.json(err))
        .then(user => res.json(user));
}

function newUser(req, res) {
    const user = new User(req.body);
    user.save()
        .catch(err => res.json(err))
        .then(() => {res.json(user)});
}

module.exports = {getUsers, getUserById, newUser};