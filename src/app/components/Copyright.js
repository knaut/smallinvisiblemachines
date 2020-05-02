import React, { Component, Fragment } from 'react'

// COMPONENTS
import { Heading, Box, Text, Anchor } from 'grommet'

export default function Copyright() {
	return (
		<Fragment>
			<Text size='medium'>© {new Date().getFullYear()}  Daniel A. Anderson. All rights reserved.</Text>
			<Text size='medium'>
				<Anchor href='mailto:daniel@smallinvisiblemachines.com'>daniel@smallinvisiblemachines.com</Anchor>
			</Text>
		</Fragment>
	)
}