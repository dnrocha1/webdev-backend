const mongoose = require('mongoose');
const environment = process.env.NODE_ENV;
const db = mongoose.connection;

function connect () {
    const mongoUrl = environment === 'development' ? 'mongodb://localhost/manager' : 'mongodb://localhost/test'

    mongoose.Promise = Promise;  
    mongoose.connect(mongoUrl, { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);

    db.on('error', console.error.bind(console, 'conection error:'));
    db.once('open', () => {
        console.log('db connection ok');
    });
}

module.exports = connect;