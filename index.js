const express = require('express');
const app = express();
const morgan = require('morgan');
const cache = require('memory-cache');

const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static('static'));

const conta = require('./server/conta/conta.route');
const amigo = require('./server/amigo/amigo.route');
const grupo = require('./server/grupo/grupo.route');


app.get('/', (req, res) => res.send('Página Inicial'));


/**
 * Contas
 */
app.use('/conta', conta);

/**
 * Amigos
 */
app.use('/amigo', amigo);

/**
 * Grupos
 */
app.use('/grupo', grupo);


//3
cache.put('houdini', 'disappear', 1500, (key, value) => {
    console.log(key + ' did ' + value);
    console.log('----------------------')
});

//1
console.log('Houdini will now ' + cache.get('houdini'));

//2
setTimeout(() => {
    console.log('Houdini is ' + cache.get('houdini'));
}, 500);

app.listen(PORT, () => {
    process.env.PORT ? console.log("in production") : console.log("in development");
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;