const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
        unique: true
    },
    groups: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Group',
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    member_confirmation: {
        type: Boolean,
        default: false
    },
    //aproved_by_admin?
});

module.exports = mongoose.model('Member', MemberSchema);