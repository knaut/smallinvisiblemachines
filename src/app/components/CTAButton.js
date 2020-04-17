import React, { Component } from 'react'

// COMPONENTS
import { Box } from 'grommet'
import Theme, { sim } from './Theme'

export default function CTAButton({ icon, size, background }) {
	return (
		<Box
			round='full'
			background={ background ? background : sim.global.colors.neutralDark }
			width={{ max: size }}
			height={{ max: size }}
		>
			{icon}
		</Box>
	)
}