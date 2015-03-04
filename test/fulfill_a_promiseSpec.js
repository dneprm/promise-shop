var sinon = require('sinon');
var expect = require('chai').expect;


describe('fulfill_a_promise', function() {
  before(function(){
    sinon.spy(console, 'log');
    require('../solution/fulfill_a_promise');
  });
  
  afterEach(function() {
    console.log.restore();
  });
  
  it('runs console.log with RESOLVED', function(done) {
    setTimeout(function(){
      expect(console.log.calledWith("RESOLVED!")).to.be.true;
      done();
    }, 350)
  });
});
