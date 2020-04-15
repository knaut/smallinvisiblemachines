import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'

// COMPONENTS
import {
	Box
} from 'grommet'

import Theme from '../src/app/components/Theme'
import { Logo } from '../src/app/components/Logo'

// STYLES
import { sim } from '../src/app/components/Theme'

storiesOf('Logo', module)
	.add('Logotype', () => (
		<Theme>
			<Logo color={sim.global.colors.neutralDarkGray}/>
		</Theme>
	))