'use strict';

const Hapi = require('@hapi/hapi');

const start = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	});

	await server.start();

	console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', error => {
	console.log(error);
	process.exit(1);
});

start();