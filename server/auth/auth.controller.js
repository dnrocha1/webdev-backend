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
            if(user && userEmail === user.email && user.comparePassword(userPassword, user.password)) {
                const token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    //role: ADMIN
                },  config.jwtSecret);

                return res.json({userId: user._id, token});

            } else {
                const err = {'message':'SENHA INCORRETA'};
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