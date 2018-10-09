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
                    return res.json({ userId: user._id, token });
                } else {
                    return res.json({ 'message':'Failed. Wrong password.' });
                }
            }
        })
        .catch((err) => {
            console.log(err);
            const error = {' message':'Something went wrong, try again. ', 'error': err.message };
            return res.json(error);
        });
}

const authenticate = (req, res, next) => {
    console.log(req.headers['authorization'])
    //const token = req.body.token; //|| req.headers['authorization'].split(" ")[1];
    let token = undefined;
    if (req.headers['authorization']) {
        token = req.headers['authorization'].split(" ")[1];
    } else {
        token = req.body.token;
    }
    if(token) {
        try {
            const data = (decodeToken(token));
            if(data) {
                req.email = data.email;
                next();
            } else {
                return res.json({ 'message':'Failed to decode. Wrong token.' });
            }
        } catch (error) {
            console.log(error);
            return res.json({ 'message':'Something went wrong, try again.', 'error': error.message });
        }
    } else {
        return res.json({ 'message':'Failed to authenticate. Unreachable token.' });
    }
}

const decodeToken = (token) => {
    return jwt.verify(token, config.jwtSecret);
}

module.exports = {login, authenticate};