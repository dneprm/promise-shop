var q = require('q');

/*q.fcall(JSON.parse, process.argv[2])
.then(null, function(error) {
  console.log(error);
})*/
q.fcall(JSON.parse, process.argv[2])
.catch(function(error) {
  console.log(error);
})