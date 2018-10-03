const jwt = require('jsonwebtoken');
const userCtrl = require('../user/user.controller');

config = {
    jwtSecret: 'asdf'//colocar isso em outro lugar
}

const login = (req, res, next) => {

    const userEmail = req.body.email;
    const userPassword = req.body.password;

    userCtrl.getUserByEmail(userEmail)
        .then((user) => {
            if(user && userEmail === user.email) {
                const token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                    email: user.email
                },  config.jwtSecret);

                return res.json({token, userId: user._id});

            } else {
                const err = {'message':'JWT ERROR'};
                return res.json(err);
                //return next(err);
            }
        })
        .catch((err) => {
            const error = {'message':'ANY OTHER ERROR'};
            return res.json(error);
            //return next(error);
        });
}

module.exports = {login}