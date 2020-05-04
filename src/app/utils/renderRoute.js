import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider} from 'react-redux'
import { StaticRouter } from 'react-router'
import { matchRoutes, renderRoutes } from 'react-router-config'
import generateStore from '../../app/utils/generateStore'

export default function(url, state) {
	const location = url ? url : '/'
	const store = generateStore(state)
	const context = {}
	const string = renderToString(
		<Provider store={store}>
			<StaticRouter location={location} context={context}>
				{ renderRouter(routes) }
			</StaticRouter>
		</Provider>
	)

	const html = `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title><%= htmlWebpackPlugin.options.title %></title>
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
					${string}
				</div>
			</body>
		</html>
	`

	return html
}