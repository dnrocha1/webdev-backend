const jwt = require('jsonwebtoken');
const userCtrl = require('../user/user.controller');

const config = require('../../config/config');

const login = (req, res, next) => {

    const userEmail = req.body.email;
    const userPassword = req.body.password;

    userCtrl.getUserByEmail(userEmail)
        .then((user) => {

            if(!user) {
                return res.json({ 'message':'Failed. User not found.' });
            } else if(user) {
                if(userEmail === user.email && user.comparePassword(userPassword, user.password)) {
                    const token = jwt.sign({
                        _id: user._id,
                        email: user.email,
                        //role: ADMIN
                    },  config.jwtSecret);
                    return res.json({ userId: user._id, token })
                } else {
                    return res.json({ 'message':'Failed. Wrong password.' });
                }
            }
        })
        .catch((err) => {
            const error = {' message':'Something went wrong, try again! '};
            return res.json(error);
        });
}

module.exports = {login};