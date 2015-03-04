var HTTP = require('q-io/http');

HTTP.read("http://localhost:1337")
.then(function(context) {
  console.log(JSON.parse(context));
})
.catch(function(error) {
  console.log(error);
})