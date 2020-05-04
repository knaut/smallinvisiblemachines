'use strict';

const Hapi = require('@hapi/hapi');
const renderRoute = require('./utils/renderRoute')

const start = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			const html = renderRoute()
			return h.response(html)
		}
	});

	await server.start();

	console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', error => {
	console.log(error);
	process.exit(1);
});

start();