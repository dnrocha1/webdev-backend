const express = require('express');
const router = express.Router();

const controller = require('./transaction.controller');

router.route('/')
    .get(auth.authenticate, controller.getTransactions)
    .post(auth.authenticate, controller.newTransaction);

router.route('/:idTransaction')
    .get(auth.authenticate, controller.getTransactionById)
    .put(auth.authenticate, controller.updateTransaction)
    .delete(auth.authenticate, controller.removeTransaction);

module.exports = router;