import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import generateRootReducer from './generateRootReducer'

export default function generateStore(history, state) {
	const initialState = state || {}

	const middleware = compose(
		applyMiddleware(
			routerMiddleware(history),
			createLogger()
		)
	)

	const store = createStore(
		generateRootReducer(history),
		initialState,
		middleware
	)

	return store
}