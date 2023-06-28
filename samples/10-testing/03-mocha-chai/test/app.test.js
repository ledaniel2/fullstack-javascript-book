import app from '../app.js';
import request from 'supertest';
import chai from 'chai';
const expect = chai.expect;

describe('GET /users', () => {
  it('should return all users', async () => {
    const res = await request(app)
      .get('/users')
      .expect(200)
      .expect('Content-Type', /json/);
    
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.above(0);
  });
});
