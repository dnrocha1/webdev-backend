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

function getUserByEmail(userEmail) {
    return User.findOne({'email': userEmail});
}

function newUser(req, res) {
    const user = new User(req.body);
    user.save()
        .then(() => res.json(user))
        .catch(err => res.json(err));
}

function updateUser(req, res) {
    User.findOneAndUpdate({_id: req.params.idUser}, req.body, {new: true})
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
}

function newFavUser(req, res) {
    const favUsers = req.body.favUsers;
    User.findOneAndUpdate({_id: req.params.idUser}, {$addToSet: favUsers}, {new: true})
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
}

function removeUser(req, res) {
    User.findOneAndDelete({_id: req.params.idUser}, {rawResult: true})
        .then((user) => res.json(user.value))
        .catch((err) => res.json(err));
}

module.exports = {getUsers, getUserById, getUserByEmail, newUser, newFavUser, updateUser, removeUser};