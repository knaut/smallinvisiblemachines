// IMPORTS
import React from 'react'

// COMPONENTS
import { Box, Avatar, Image } from 'grommet'

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
			flex='shrink'
			width={{ max: size ? size : 'small' }}
			height={{ max: size ? size : 'small' }}
			css={`
				overflow: hidden;
			`}
		>
			<Image
				fit='cover' 
				src={daniel}
			/>
		</Box>
	)
}