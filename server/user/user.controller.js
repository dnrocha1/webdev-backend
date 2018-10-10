const User = require('./user.model');

function getUsers(req, res) {
    User.find()
        .then(users => {
            if (users.length === 0) return res.status(404).json({'message':'Users not found'});
            return res.json(users);
        })
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
        .catch(err => res.status(400).json(err));
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

function removeAll(req, res) {
    User.deleteMany({})
        .then(() => res.json({'message':'Removed all users.'}))
        .catch((err) => {
            console.log(err);
            return res.json({'message': err.message})
        });
}

module.exports = {getUsers, getUserById, getUserByEmail, newUser, newFavUser, updateUser, removeUser, removeAll};