'use strict';

const Hapi = require('@hapi/hapi');

const html = `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>Daniel A. Anderson - Small Invisible Machines</title>
			<style type="text/css">
					body,
					html,
					#root {
						height: 100%;
					}
			</style>
			<link rel="stylesheet" href="https://use.typekit.net/evz1xyv.css">
		</head>
		<body>
			<div id="root">
			</div>
			<script type="text/javascript" src="/assets/app.bundle.js"></script>
		</body>
	</html>
`

const start = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	});

	await server.register(require('@hapi/inert'))

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {

			return h.response(html)
		}
	});

	server.route({
		method: 'GET',
		path: '/assets/{param*}',
		handler: {
			directory: {
				path: './static'
			}
		}
	})

	await server.start();

	console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', error => {
	console.log(error);
	process.exit(1);
});

start();