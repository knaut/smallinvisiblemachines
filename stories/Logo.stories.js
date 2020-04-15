import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'

// COMPONENTS
import {
	Box
} from 'grommet'

import Theme from '../src/app/components/Theme'
import Logo from '../src/app/components/Logo'

// STYLES
import { sim } from '../src/app/components/Theme'

storiesOf('Logo', module)
	.add('Arrangement1', () => (
		<Theme>
			<Logo color={sim.global.colors.neutralDarkGray}/>
		</Theme>
	))
	.add('Arrangement2', () => (
		<Theme>
			<Logo 
				arrangement={2}
				color={sim.global.colors.neutralDarkGray}
			/>
		</Theme>
	))

	.add('Arrangement3', () => (
		<Theme>
			<Logo 
				arrangement={3}
				color={sim.global.colors.neutralDarkGray}
			/>
		</Theme>
	))
	.add('Logotype', () => (
		<Theme>
			<Logo 
				arrangement={'logotype'}
				color={sim.global.colors.neutralDarkGray}
			/>
		</Theme>
	))