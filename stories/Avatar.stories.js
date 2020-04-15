import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'

// COMPONENTS
import {
	Box
} from 'grommet'

import Theme from '../src/app/components/Theme'
import Avatar from '../src/app/components/Avatar'

// STYLES
import { sim } from '../src/app/components/Theme'

storiesOf('Avatar', module)
	.add('default', () => (
		<Theme>
			<Avatar size='200px'/>
		</Theme>
	))