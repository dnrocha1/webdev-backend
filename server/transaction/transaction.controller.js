const Transaction = require('./transaction.model');

function getTransactions(req, res) {
    Transaction.find()
        .catch(err => res.json(err))
        .then(transactions => res.json(transactions));
}

function getTransactionById(req, res) {
    Transaction.findById(req.params.idTransaction)
        .catch(err => res.json(err))
        .then(transaction => res.json(transaction));
}

function newTransaction(req, res) {
    const transaction = new Transaction(req.body);
    transaction.save()
        .catch(err => res.json(err))
        .then(() => {res.json(transaction)});
}

module.exports = {getTransactions, getTransactionById, newTransaction};