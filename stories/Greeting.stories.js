import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'

// COMPONENTS
import {
	Box
} from 'grommet'

import Theme from '../src/app/components/Theme'
import Greeting from '../src/app/components/Greeting'

// STYLES
import { sim } from '../src/app/components/Theme'

storiesOf('Greeting', module)
	.add('default', () => (
		<Theme>
			<Greeting/>
		</Theme>
	))