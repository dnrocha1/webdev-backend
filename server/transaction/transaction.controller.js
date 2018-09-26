const Transaction = require('./transaction.model');

function getTransactions(req, res) {
    Transaction.find()
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
    transaction.save()
        .then(() => res.json(transaction))
        .catch(err => res.json(err));
}

module.exports = {getTransactions, getTransactionById, newTransaction};