var sinon = require('sinon');
var expect = require('chai').expect;

describe('reject_a_promise', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/reject_a_promise');
  });
  afterEach(function() {
    console.log.restore();
  });
  it('runs console.log with error.message "REJECTED!"', function(done) {
    setTimeout(function() {
      expect(console.log.calledWith('REJECTED!')).to.be.true;
      done();
    }, 350);
  });
});