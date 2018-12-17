const Transaction = require('./transaction.model');
const userController = require('../user/user.controller');

function getTransactions(req, res) {
    Transaction.find()
        //.populate('paidByUser')
        .populate('transactionMembers.user')
        .exec()
        .then(transactions => res.json(transactions))
        .catch(err => res.json(err));
}

function getTransactionById(req, res) {
    Transaction.findById(req.params.idTransaction)
        .then(transaction => res.json(transaction))
        .catch(err => res.json(err));
}

function newTransaction(req, res) {
    const transaction = new Transaction(req.body);
    
    let usersDebtor = transaction.transactionMembers.map((member) => member.user._id);
    //users.push(transaction.paidByUser);

    transaction.save()
        .then(() => {
            //Promise.all(users.map(user => userController.addTransaction(transaction, user)))
            Promise.all([
               ...usersDebtor.map(user => userController.addTransactionDebt(transaction, user)),
                userController.addTransactionReceiving(transaction, transaction.paidByUser)
            ])
            .then(() => res.json(transaction))
        })
        .catch(err => res.json(err));
}

function updateTransaction(req, res) {
    Transaction.findOneAndUpdate({_id: req.params.idTransaction}, req.body, {new: true})
        .then((transaction) => res.json(transaction))
        .catch((err) => res.json(err));
}

function removeTransaction(req, res) {
    Transaction.findOneAndDelete({_id: req.params.idTransaction}, {rawResult: true})
        .then((transaction) => res.json(transaction.value))
        .catch((err) => res.json(err));
}

module.exports = {getTransactions, getTransactionById, newTransaction, updateTransaction, removeTransaction};