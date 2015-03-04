var q = require('q');
var defer = q.defer();

defer.promise.then(function(value) {
  console.log(value);
})
.catch(function(error) {
  console.log(error)
})
defer.resolve("I FIRED");
defer.reject("I DID NOT FIRE");