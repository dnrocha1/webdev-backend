const User = require('./user.model');

exports.getUsers = (req, res) => {
    User.find()
        .populate({ path: 'debt', populate: { path: 'paidByUser', select: 'name' } })
        .populate({ path: 'receiving', populate: { path: 'transactionMembers.user', select: 'name' } })
        .exec()
        .then(users => {
            if (users.length === 0) return res.status(404).json({'message':'Users not found'});
            return res.json(users);
        })
        .catch(err => res.json(err));
}

exports.getUserById = (req, res) => {
    User.findById(req.params.idUser)
        .populate({ path: 'debt', populate: { path: 'paidByUser', select: 'name' } })
        .populate({ path: 'receiving', populate: { path: 'transactionMembers.user', select: 'name' } })
        .exec()
        .then(user => res.json(user))
        .catch(err => res.json(err));
}

exports.getUserByEmail = (userEmail) => {
    return User.findOne({'email': userEmail});
}

exports.newUser = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.status(200).json(user))
        .catch(err => res.status(400).json(err));
}

exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.idUser}, req.body, {new: true})
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
}

exports.newFavUser = (req, res) => {
    const favUsers = req.body.favUsers;
    User.findOneAndUpdate({_id: req.params.idUser}, {$addToSet: favUsers}, {new: true})
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
}

exports.removeUser = (req, res) => {
    User.findOneAndDelete({_id: req.params.idUser}, {rawResult: true})
        .then((user) => res.json(user.value))
        .catch((err) => res.json(err));
}

exports.removeAll = (req, res) => {
    User.deleteMany({})
        .then(() => res.json({'message':'Removed all users.'}))
        .catch((err) => {
            console.log(err);
            return res.json({'message': err.message})
        });
}

exports.addTransactionDebt = (transaction, userId) => {
    return User.findOneAndUpdate({_id: userId}, {$addToSet: {debt: transaction}}, {new: true});
}

exports.addTransactionReceiving = (transaction, userId) => {
    return User.findOneAndUpdate({_id: userId}, {$addToSet: {receiving: transaction}}, {new: true});
}