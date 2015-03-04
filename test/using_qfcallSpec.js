var sinon = require('sinon');
var expect = require('chai').expect;

describe('using_qfcall', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/using_qfcall');
  })
  afterEach(function() {
    console.log.restore();
  })
  it('runs console.log with generated error message', function() {
    expect(console.log.args[0][0]).to.be.instanceOf(Error);
  });
});