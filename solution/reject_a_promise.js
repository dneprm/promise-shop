var q = require('q');
var defer = q.defer();

/* 1
defer.promise.then(null, function(error) {
    console.log(error);
});*/
/* 2
defer.promise.then(function(value) {
  console.log(value);
})
.catch(function(error) {
  console.log(error);
});
setTimeout(function() {
    defer.reject("REJECTED!");
}, 300);*/
defer.promise.then(function(value) {
  console.log(value);
})
.catch(function(error) {
  console.log(error.message);
});
setTimeout(function() {
  defer.reject(new Error("REJECTED!"));
}, 300);