import React from 'react'

// STORYBOOK UTILS
import { storiesOf } from '@storybook/react'

// COMPONENTS
import {
	Box
} from 'grommet'

import Theme from '../src/app/components/Theme'
import Greeting from '../src/app/components/Greeting'
import SkillRotator, { Skill } from '../src/app/components/SkillRotator'

// STYLES
import { sim } from '../src/app/components/Theme'

storiesOf('Greeting', module)
	.add('default', () => (
		<Theme>
			<Greeting/>
		</Theme>
	))


storiesOf('SkillRotator', module)
	.add('default', () => (
		<Theme>
			<SkillRotator/>
		</Theme>
	))

// storiesOf('Skill', module)
	// .add('active', () => (
	// 	<Theme>
	// 		<Skill active>This is an active skill</Skill>
	// 	</Theme>
	// ))
	// .add('entering', () => (
	// 	<Theme>
	// 		<Skill entering>This is an entering skill</Skill>
	// 	</Theme>
	// ))
	// .add('exiting', () => (
	// 	<Theme>
	// 		<Skill exiting>This is an exiting skill</Skill>
	// 	</Theme>
	// ))