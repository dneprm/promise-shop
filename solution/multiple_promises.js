var q = require('q');
var defer1 = q.defer(),
    defer2 = q.defer(),
    promise1 = defer1.promise,
    promise2 = defer2.promise;
function all(a, b) {
   var defer =  q.defer(),
       count = 0,
       arr = [];
  
   [a, b].forEach(function(promise) {
     promise.then(function(value) {
       count++;
       arr.push(value);
       if(count===2) {
         defer.resolve(arr);
       }
     })
     .catch(function(error) {
       defer.reject(error);
     })
   });
  return defer.promise;
}
all(promise1, promise2)
.then(function(value) {
  console.log(value);
});
setTimeout(function() {
  defer1.resolve("PROMISES");
  defer2.resolve("FTW");
}, 200);
    
