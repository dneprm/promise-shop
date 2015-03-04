var sinon = require('sinon');
var expect = require('chai').expect;

describe('values_and_promises', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/values_and_promises');
  });
  afterEach(function() {
    console.log.restore();
  })
  
  it('returns "DR. MANHATTAN"', function() {
    expect(console.log.calledWith("DR. MANHATTAN")).to.be.true;
  })
})