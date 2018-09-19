const moongoose = require('mongoose');

const UserSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    groups: [{
        type: moongoose.Schema.Types.ObjectId, ref: 'Group'
    }],
    favUsers: [{
        type: moongoose.Schema.Types.ObjectId, ref: 'User'
    }]
});

module.exports = moongoose.model('User', UserSchema);