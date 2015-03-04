var q = require('q');
var defer = q.defer();

function parsePromised(json) {
  var result;
  try {
    result = JSON.parse(json);
  } catch (e) {
    defer.reject(e);
  }
  defer.resolve(result);
  return defer.promise
}
parsePromised(process.argv[2])
.then(null, function(error) {
  console.log(error);
});