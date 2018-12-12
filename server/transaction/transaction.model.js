const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    transactionDate: {
        type: Date
    },
    publicationDate: {
        type: Date, default: Date.now
    },
    description: {
        type: String
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    paidByUser: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    transactionMembers: [{
        user: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
        userAmount: {type: Number}
    }],
    paidOff:  {
        type: Boolean, default: false
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);