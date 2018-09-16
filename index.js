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
            title: 'Minha aplicação',
            version: '1.0.0',
        },
    },
    apis: ['./index.js', './server/**/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
app.get('/docs', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
 
//router.use('/', swaggerUi.serve);
//router.get('/', swaggerUi.setup(swaggerDocument));
const swaggerOptions = {  
    customSiteTitle: 'Swagger Documentation',  
    customCss: '.topbar { }',  
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions));

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
 *     description: Página inicial da aplicação
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: homepage
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