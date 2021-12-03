const request = require('supertest');

const app = require('../src/app');

describe('GET /mock-qmf-service/api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/mock-qmf-service/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🏻'
      }, done);
  });
});
