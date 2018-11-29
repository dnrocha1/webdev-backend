const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
        //unique: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Group',
        required: true,
        //unique: true
    },
    role: {
        type: String,
        //required: true,
        enum: ["ADMIN", "USER"],
        default: "USER"
    },
    member_confirmation: {
        type: Boolean,
        default: false
    },
    //aproved_by_admin?
});

MemberSchema.index({ user: 1, group: 1}, { unique: true });

module.exports = mongoose.model('Member', MemberSchema);