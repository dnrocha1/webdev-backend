const request = require('supertest');
const app = require('../index');

request(app)
    .get('/amigo')
    .expect(200)
    .end((err, res) => {
        if (err) throw err;
    });

request(app)
    .get('/grupo')
    .expect(200)
    .end((err, res) => {
        if (err) throw err;
    });

request(app)
    .get('/conta')
    .expect(200)
    .end((err, res) => {
        if (err) throw err;
    });