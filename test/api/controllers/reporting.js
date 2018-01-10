var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('reporting', function() {

    describe('GET /reporting', function() {

      it('should return OK', function(done) {

        request(server)
          .get('/reporting')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.status.should.eql(200);
            done();
          });
      });
    });
  });

});
