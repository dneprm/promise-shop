var sinon = require('sinon');
var expect = require('chai').expect;
var http = require('http');

describe('do_some_work', function() {
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
    require('../solution/do_some_work');
  })
  afterEach(function() {
    console.log.restore();
  });
  it('runs console.log with parsed returned JSON', function(done){
    /*var resp1, resp2;
    http.get('http://localhost:7000', function (res) {
      res.on('data', function(body) {
        resp1 = body;
      });
    });
    if(resp1) {
      var address = 'http://localhost:7001/' + resp1;
      http.get(address, function (res) {
        res.on('data', function(body) {
          resp2 = JSON.parse(body);
        });
      });
    }*/
    setTimeout(function() {
      //expect(console.log.args[0][0]).to.deep.equal(resp2);
      expect(console.log.calledWith(obj)).to.be.true;
      done();
    }, 350);
  }); 
})