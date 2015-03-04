var sinon = require('sinon');
var expect = require('chai').expect;

describe('an_important_rule', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/an_important_rule');
  });
  afterEach(function() {
    console.log.restore();
  });
  it('prints to the console numbers from 1 to 5 and an error message "OH NOES"', function() {
    expect(console.log.args).to.deep.equal([[1], [2], [3], [4], [5], [new Error("OH NOES")]]);
    expect(console.log.callCount).to.equal(6);
  });
})