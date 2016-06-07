'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');
const mongoose = require('mongoose');
chai.use(chaiHTTP);

const expect = chai.expect;
const request = chai.request;
const dbPort = process.env.MONGODB_URI;

process.env.MONGODB_URI = 'mongodb://localhost/test_db';
require(dbPort);

describe('name your Async test', () => {
  it('name your test', (done) => {
    request('localhost:3000')
      .get('/')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('name your test', () => {
  it('name your test', () => {
    request('localhost:3000')
      .get('/')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
      });
  });
});

describe('name your test', () => {
  it ('should catch not found', (done)=>{
    request('localhost:3000')
    .get('/notthere')
    .end((err, res) => {
      expect(res).to.have.status(404);
      expect(res.text).to.eql('page not found');
      done();
    });
  });
});
