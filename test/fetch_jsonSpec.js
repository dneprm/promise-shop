var sinon = require('sinon');
var expect = require('chai').expect;
var http = require('http');

describe('fetch_json', function() {
  var server;
  var obj = { id: 1337, name: 'Katy Perry', occupation: '???' };

  before(function(done) {
    server = http.createServer(function (request, response) {
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify(obj));
    });
    server.listen(1337);

    done();
  });
  after(function () {
    server.close();
  });
  
  before(function() {
    sinon.spy(console, 'log');
    require('../solution/fetch_json');
  })
  afterEach(function() {
    console.log.restore();
  });
  
  it('runs console.log with parsed returned JSON', function(done){
    var resp;
    http.get('http://localhost:1337', function (res) {
            res.on('data', function(body) {
              resp = JSON.parse(body);
            });
        });
    setTimeout(function() {
      expect(console.log.args[0][0]).to.deep.equal(resp);
      done();
    }, 350)
  }); 
});