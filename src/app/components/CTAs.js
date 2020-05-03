import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS
import { MailOption, Clipboard, Github } from 'grommet-icons'
import { Box, Text } from 'grommet'
import Theme, { sim } from './Theme'
import CallToAction from './CallToAction'

// ACTIONS
import { toggle } from '../actions/resume'

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({
			toggle
		}, dispatch)
	}
}

function ResumeCTA({ actions }) {
	function handleClick() {
		const { toggle } = actions
		toggle()
	}

	return (
		<CallToAction
			handler={handleClick}
			iconColor={sim.global.colors.primaryGreen}
			headlineColor={sim.global.colors.darkGreen}
			icon={
				<Clipboard/>
			}
			headline='read my resume'
			subline=','
		/>
	)
}

const ConnectedResumeCTA = connect(
	() => new Object(), // no store state needed here
	mapDispatchToProps
)(ResumeCTA)

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
			<ConnectedResumeCTA/>
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