import { RESUME_TOGGLE } from '../actions/resume'

export default function resume(
	state = {
		active: false
	},
	action
) {
	switch(action.type) {
		default: {
			return state
		}
		case RESUME_TOGGLE: {
			const active = !state.active

			const newState = {
				active
			}

			return newState
		}
	}
}