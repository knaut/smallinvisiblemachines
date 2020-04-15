// IMPORTS
import React from 'react'

// COMPONENTS
import { Box, Avatar } from 'grommet'

// STATIC
import daniel from '../../../static/daniel.jpg'

// STYLES
import { sim } from './Theme'

export default function MyAvatar({ size }) {
	return (
		<Box
			round='full'
			border={{
				color: sim.global.colors.primaryBlue,
				size: 'medium'
			}}
			width={{ max: size }}
			height={{ max: size }}
		>
			<Avatar 
				src={daniel}
				size={size}
			/>
		</Box>
	)
}