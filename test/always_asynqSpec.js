var sinon = require('sinon');
var expect = require('chai').expect;

describe('always_asynq', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/always_asynq');
  });
  afterEach(function() {
    console.log.restore();
  });
  it('runs console.log first with "FIRST", then with "SECOND"', function() {
    expect(console.log.args).to.deep.equal([["FIRST"], ["SECOND"]]);
  });
});