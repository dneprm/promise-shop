 var q = require('q');                                  
 var defer = q.defer(); 

  defer.promise.then(function(value) {
    console.log(value);
  });
  setTimeout(function() {
    defer.resolve("RESOLVED!");
  }, 300);
