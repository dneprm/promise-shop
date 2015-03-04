var sinon = require('sinon');
var expect = require('chai').expect;
var http = require('http');

describe('more_functional', function() {
  var server1, server2;
  var id = "12345";
  var obj = { id: 12345, first_name: "Barry", last_name: "Gernhardt", occupation: "Twitter rant specialist" };
  
  before(function(done) {
    server1 = http.createServer(function (request, response) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.end(id);
    });
    server1.listen(7000);

    done();
  });
  after(function () {
    server1.close();
  });
  before(function(done) {
    server2 = http.createServer(function (request, response) {
      if(request.url.indexOf(id)>-1) {
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify(obj));
      }
    });
    server2.listen(7001);

    done();
  });
  after(function () {
    server2.close();
  });
  
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/more_functional');
  })
  afterEach(function() {
    console.log.restore();
  });
  it('runs console.log with parsed returned JSON', function(done){
    setTimeout(function() {
      expect(console.log.calledWith(obj)).to.be.true;
      done();
    }, 350);
  }); 
})