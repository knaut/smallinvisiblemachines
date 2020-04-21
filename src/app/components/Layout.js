import React, { Component } from 'react'

// COMPONENTS
import { Box } from 'grommet'

// STYLES
import css from '@emotion/css'

export default function Layout({ children, color }) {
	return (
		<Box
			background={color}
			pad='medium'
		>
			{children}
		</Box>
	)
}