const express = require('express');
const app = express();
const router = express.Router();

const PORT = 3000;

const conta = require('./server/routes/conta.route');
const amigo = require('./server/routes/amigo.route');
const grupo = require('./server/routes/grupo.route');


app.get('/', (req, res) => res.send('Hello World!'))


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
