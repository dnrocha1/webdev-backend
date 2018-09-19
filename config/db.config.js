const mongoose = require('mongoose');
const db = mongoose.connection;

function connect () {

    mongoose.Promise = Promise;  
    mongoose.connect('mongodb://localhost/manager', { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);

    db.on('error', console.error.bind(console, 'conection error:'));
    db.once('open', () => {
        console.log('db connection ok');
    });
}

module.exports = connect;
