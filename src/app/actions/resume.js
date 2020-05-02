export const RESUME_TOGGLE = 'RESUME_TOGGLE'

export function toggle(payload) {
	return {
		type: RESUME_TOGGLE,
		payload
	}
}