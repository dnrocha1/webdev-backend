const swaggerJSDoc = require('swagger-jsdoc');

const JSDocOptions = {
    definition: {
        info: {
            title: 'Documentação do backend',
            version: '1.0.0',
        },
    },
    apis: ['./index.js', './server/**/*.js'],
};
const swaggerSpec = swaggerJSDoc(JSDocOptions);

const swaggerUIOptions = {  
    customSiteTitle: 'Swagger Documentation',  
    customCss: '.topbar { }',  
}

module.exports = {swaggerSpec, swaggerUIOptions};