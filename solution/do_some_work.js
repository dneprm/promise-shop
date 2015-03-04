var HTTP1 = require('q-io/http');
var HTTP2 = require('q-io/http');

HTTP1.read("http://localhost:7000")
.then(function(id) {
 return HTTP2.read("http://localhost:7001/" + id);
})
.then(function(context) {
  console.log(JSON.parse(context));
})
.catch(function(error) {
  console.log(error);
})