import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import resume from '../reducers/resume'

export default (history) => combineReducers({
	router: connectRouter(history),

	resume
})