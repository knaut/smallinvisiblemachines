import React, { Component } from 'react'

// COMPONENTS
import { MailOption, Clipboard, Github } from 'grommet-icons'
import { Box, Text } from 'grommet'
import Theme, { sim } from './Theme'
import CallToAction from './CallToAction'

export default function CTAs() {
	return (
		<Box>
			<CallToAction
				url={'mailto:daniel@smallinvisiblemachines.com'}
				iconColor={sim.global.colors.primaryBlue}
				headlineColor={sim.global.colors.primaryBlue}
				icon={
					<MailOption/>
				}
				headline='email'
				subline='&nbsp;me to get in touch,'
			/>
			<CallToAction
				url={'/resume'}
				iconColor={sim.global.colors.primaryGreen}
				headlineColor={sim.global.colors.darkGreen}
				icon={
					<Clipboard/>
				}
				headline='read my resume'
				subline=','
			/>
			<CallToAction
				url={'https://www.github.com/knaut'}
				iconColor={sim.global.colors.primaryPurple}
				headlineColor={sim.global.colors.primaryPurple}
				icon={
					<Github/>
				}
				headline='check my github'
				subline='&nbsp;to see work samples.'
			/>
		</Box>
	)
}