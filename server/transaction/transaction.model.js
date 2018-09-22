const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        set: num => { Math.round(num * 100) / 100 }
    },
    description: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        unique: true
    },
    date: {
        type: Date, default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    payer: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
        alias: 'creditado'
    },
    indebted: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
        alias: 'debitado'
    },
    belongingGroup: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Group'
        //required: true,
    },
    alreadyPaid: {
        type: Boolean,
        default: false
    },
    confirmedByDebtor: {
        type: Boolean,
        default: false
    }
});
//inicialmente vai ter só uma categoria, que será unica

module.exports = mongoose.model('Transaction', TransactionSchema);