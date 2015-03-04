var HTTP = require('q-io/http');
var _ = require('lodash');
var createAddress = _.bind(String.prototype.concat, "http://localhost:7001/")

HTTP.read("http://localhost:7000")
.then(_.flow(createAddress, HTTP.read))
.then(_.flow(JSON.parse, console.log))
.catch(console.error)