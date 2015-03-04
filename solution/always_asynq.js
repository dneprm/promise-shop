var q = require('q');
var defer = q.defer();

defer.promise.then(function(value) {
  console.log(value);
})

defer.resolve("SECOND");
console.log("FIRST");