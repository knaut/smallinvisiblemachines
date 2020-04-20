import React, { Component } from 'react'

// COMPONENTS
import { MailOption, Clipboard, Github } from 'grommet-icons'
import { Box, Text } from 'grommet'
import Theme, { sim } from './Theme'

function CallToAction({ icon, headline, subline }) {
 	return(
		<Box direction='row' margin='xsmall'>
			<Box
				alignSelf='start'
				background='black'
				margin={{right: 'small'}}
				pad='small'
				round='full'
			>
				{ icon }
			</Box>
			<Box alignSelf='center'>
				<Text>
					<Text weight='bold'  size='xxlarge'>{headline}</Text>
					<Text size='xxlarge'>{subline}</Text>
				</Text>
			</Box>
		</Box> 
 	)
}

export default function CTAs() {
	return (
		<Box>
			<CallToAction 
				icon={
					<MailOption/>
				}
				headline='email'
				subline='&nbsp;me to get in touch,'
			/>
			<CallToAction 
				icon={
					<Clipboard/>
				}
				headline='read my resume'
				subline=','
			/>
			<CallToAction 
				icon={
					<Github/>
				}
				headline='check my github'
				subline='&nbsp;to see work samples.'
			/>
		</Box>
	)
}