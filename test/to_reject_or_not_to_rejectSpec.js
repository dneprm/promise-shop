var sinon = require('sinon');
var expect = require('chai').expect;
//var chai = require('chai');
//var sinonChai = require('sinon-chai');
//var expect = chai.expect;
  //chai.use(sinonChai);


describe('to_reject_or_not_to_reject', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/to_reject_or_not_to_reject');
  });
  afterEach(function() {
    console.log.restore();
  });
  //it('runs console.log only with "I FIRED"', function() {
   // expect(console.log).to.have.been.calledWith("I FIRED");
   // expect(console.log).to.have.not.been.calledWith("I DID NOT FIRE");
  //});
  it('runs console.log only with "I FIRED" and never with "I DID NOT FIRE"', function() {
    expect(console.log.neverCalledWith("I DID NOT FIRE")).to.be.true;
    expect(console.log.calledWith("I FIRED")).to.be.true;
  });
})