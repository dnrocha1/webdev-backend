const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbConfig = require('./config/db.config');
dbConfig();

const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./config/swagger.config');

app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(
    swaggerConfig.swaggerSpec, 
    swaggerConfig.swaggerUIOptions
));

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.use(morgan('tiny'));
app.use(cors());

const user = require('./server/user/user.route');
const group = require('./server/group/group.route');
const member = require('./server/member/member.route')
const transaction = require('./server/transaction/transaction.route');
//const transaction = require('./server/transaction/transaction.route');

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
app.get('/', (req, res) => res.json('Página Inicial'));

app.use('/user', user);
app.use('/group', group);
app.use('/member', member);
app.use('transaction', transaction);


app.listen(PORT, () => {
    process.env.PORT ? console.log("in production") : console.log("in development");
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;