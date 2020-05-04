'use strict';

const Hapi = require('@hapi/hapi');
const React = require('react')
const app = require('../app/index.js')
const string = React.renderToString(app)

const start = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return h.response(string)
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