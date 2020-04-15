// IMPORTS
import React from 'react'

// COMPONENTS
import {
	Grommet,
	grommet as grommetTheme
} from 'grommet'

// UTILS
import { deepMerge } from 'grommet/utils'

const neutralLight = '#f2f2f2'
const neutralGray = '#8d9aa6'
const neutralDarkGray = '#455059'
const neutralBlack = '#0d0d0d'
const pastelRed = '#ffbdcd'
const pastelYellow = '#ffedb8'
const pastelGreen = '#b7edca'
const pastelBlue = '#bbecf2'
const pastelPurple = '#c8b8f5'
const primaryRed = '#ff3c6e'
const primaryYellow = '#ffce39'
const primaryGreen = '#40ec7c'
const primaryBlue = '#26c6da'
const primaryPurple = '#8156f4'
const darkRed = '#801f37'
const darkYellow = '#80671c'
const darkGreen = '#1e6e3a'
const darkBlue = '#0f5159'
const darkPurple = '#3d2975'

export const sim = deepMerge(grommetTheme, {
	global: {
		// font: {
		// 	family: 'Acumin, Helvetica Neue, Helvetica, Arial, sans-serif'
		// }
		colors: {
			neutralLight,
			neutralGray,
			neutralDarkGray,
			neutralBlack,
			pastelRed,
			pastelYellow,
			pastelGreen,
			pastelBlue,
			pastelPurple,
			primaryRed,
			primaryYellow,
			primaryGreen,
			primaryBlue,
			primaryPurple,
			darkRed,
			darkYellow,
			darkGreen,
			darkBlue,
			darkPurple,
		}
	}
})

const SimTheme = ({ children }) => (
	<Grommet
		full
		cssVars
		theme={sim}
	>
		{children}
	</Grommet>
)

export default SimTheme
