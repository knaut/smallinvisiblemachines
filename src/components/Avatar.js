// IMPORTS
import React from 'react'

// COMPONENTS
import { Box, Avatar, Image } from 'grommet'

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
				src={'/assets/daniel.jpg'}
			/>
		</Box>
	)
}