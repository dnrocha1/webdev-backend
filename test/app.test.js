//const request = require('supertest');
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

const async = require('async');

const app = require('../index');
const User = require('../server/user/user.model');

chai.use(chaiHttp);

const user1 = {
    'name': 'err',
    'email': 'err@gmail.com',
    //'password': 'asdf'
}

const user2 = {
    'name': 'lorem',
    'email': 'lorem@gmail.com',
    'password': '1234'
}

const user3 = {
    'name': 'xpto',
    'email': 'xpto@gmail.com',
    'password': 'asdf'
}

describe('USER', async () => {
    beforeEach(async () => {
        await User.deleteMany({}).exec();
    });

    describe('/GET User', () => {
        it('Get all users with an empty return', (done) => {
            chai.request(app)
                .get('/user')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.should.be.json;
                    res.body.should.be.a("object");
                    done();
                });
        });

        it('Get all new users', (done) => {
            const request = chai.request.agent(app);
            request
            .post('/user')
            .send(user2)
            .then((res) => {
                request
                .post('/user')
                .send(user3)
                .then((res) => {
                    request
                    .get('/user')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(2);
                        done();
                    });
                });
                
            });
        });
    });

    describe('/POST User', () => {
        it('Error in creating user', (done) => {
            chai.request(app)
                .post('/user')
                .send(user1)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });

});