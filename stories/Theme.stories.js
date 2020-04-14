import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'

// COMPONENTS
import {
	Box
} from 'grommet'

import Theme from '../src/app/components/Theme'

storiesOf('Theme', module)
	.add('Box Test', () => (
		<Theme>
			<Box fill background='neutralLight'>Sed do laborum ullamco pariatur excepteur minim duis dolor duis magna dolor et sit consequat ut tempor proident aute exercitation laborum eiusmod consequat esse qui et id sunt sint ut.</Box>
		</Theme>
	))