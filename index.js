const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dbConfig = require('./config/db.config');
dbConfig();

const swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition: {
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    apis: ['./index.js'],
};
const swaggerSpec = swaggerJSDoc(options);
app.get('/docs', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.use(morgan('tiny'));

const conta = require('./server/conta/conta.route');
const amigo = require('./server/amigo/amigo.route');
const grupo = require('./server/grupo/grupo.route');

/**
 * @swagger
 * /:
 *   get:
 *     description: Faz isso
 *     produces:
 *       - application/json
 *   responses:
 *     200:
 *       description: home
 */
app.get('/', (req, res) => res.send('Página Inicial'));

app.use('/conta', conta);
app.use('/amigo', amigo);
app.use('/grupo', grupo);


app.listen(PORT, () => {
    process.env.PORT ? console.log("in production") : console.log("in development");
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;