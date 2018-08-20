const request = require('supertest');
const app = require('../servertest.js');
var chai = require('chai');
var expect = chai.expect;

let userName;
let userID;

describe('Behance all data', () => {
    it('It should get list of all users', (done) => {
        request(app)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200); 
                expect(res.body).to.be.an('array');
                done();
            });
    });
});

describe('Behance Search text data', () => {
    it('It should response list of users available with search text', (done) => {
        request(app)
            .get(`/api/users?q/${userName}`)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200); 
                expect(res.body).to.be.an('array');
                done();
            });
    });
});

describe('Behance Get details of user by id', () => {
    it('It should response user details object', (done) => {
        request(app)
            .get(`/api/users?user_id=${userID}`)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200); 
                expect(res.body).to.be.an('object');
                done();
            });
    });
});

