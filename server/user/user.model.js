const moongoose = require('mongoose');
const bcrpyt = require('bcrypt');

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

UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrpyt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrpyt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });

});

module.exports = moongoose.model('User', UserSchema);