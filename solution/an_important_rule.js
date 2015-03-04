var q = require('q');

function throwMyGod() {
  throw new Error("OH NOES");
}
function iterate(integer) {
  console.log(integer);
  return ++integer;
}
q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, function(error) {
  console.log(error);
})
