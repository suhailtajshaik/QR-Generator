const express = require('express');
const path = require('path');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join('.')));


const server = app.listen(config.port, function () {
	var port = server.address().port;
	console.log('\nExpress server listening on port ' + port + ', in ' + config.env + ' mode');
    if(config.env === 'production'){
        console.log(`open ${config.protocol}://${config.hostname}`);
    }else{
        console.log(`open ${config.protocol}://${config.hostname}:${port}`);
    }
})

server.on('error', function (e) {
	if (e.code === 'EADDRINUSE') {
		console.log('ADDRESS IN USE');
		console.log('\nExpress server listening on port ' + e.port + ', in ' + config.env + ' mode')
	} else {
		process.exit(1);
	}
})