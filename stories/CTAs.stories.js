import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'

// COMPONENTS
import {
	Box
} from 'grommet'

import Theme from '../src/app/components/Theme'
import CTAs from '../src/app/components/CTAs'

storiesOf('CTAs', module)
	.add('default', () => (
		<Theme>
			<CTAs/>
		</Theme>
	))