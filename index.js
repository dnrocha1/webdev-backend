const express = require('express');
const app = express();
const morgan = require('morgan');

const PORT = 3000;

app.use(morgan('tiny'));
app.use(express.static('static'));

const conta = require('./server/conta/conta.route');
const amigo = require('./server/amigo/amigo.route');
const grupo = require('./server/grupo/grupo.route');


app.get('/', (req, res) => res.send('Página Inicial'))


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


app.listen(PORT, () => console.log('Example app listening on port 3000!'));

module.exports = app;