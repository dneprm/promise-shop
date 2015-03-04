var sinon = require('sinon');
var expect = require('chai').expect;

describe('multiple_promises', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/multiple_promises');
  });
  afterEach(function() {
   console.log.restore();
  });

  it('prints ["PROMISES", "FTW"] to the console', function(done) {
    setTimeout(function() {
      expect(console.log.calledWith(['PROMISES', 'FTW'])).to.be.true;
      done();
    }, 250)
  })
})