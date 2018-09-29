const express = require('express');
const router = express.Router();

const controller = require('./transaction.controller');

router.route('/')
    .get(controller.getTransactions)
    .post(controller.newTransaction);

router.route('/:idTransaction')
    .get(controller.getTransactionById)
    .put(controller.updateTransaction)
    .delete(controller.removeTransaction);

module.exports = router;