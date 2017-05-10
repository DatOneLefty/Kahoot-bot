var cluster = require('cluster');
var amount = parseInt(process.argv[3]);

if (cluster.isMaster) {

    for (var i = 0; i < amount; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', function () {
        cluster.fork();
        cluster.fork();
    });

} else {
    require('./index');
}
