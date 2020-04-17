import React, { Component } from 'react'

// COMPONENTS
import { MailOption, Clipboard, Github } from 'grommet-icons'
import { Box, Text } from 'grommet'
import Theme, { sim } from './Theme'
import CTAButton from './CTAButton'

export default function CTAs() {
	return (
		<Box>
			<Box direction='row'>
				<CTAButton icon={
					<MailOption/>
				}/>
				<Text size='xxlarge'><Text size='xxlarge' weight='bolder'>email</Text> me to get in touch,</Text>
			</Box>
			<Box direction='row'>
				<CTAButton icon={
					<Clipboard/>
				}/>
				<Text size='xxlarge'><Text size='xxlarge' weight='bolder'>read my resume</Text>,</Text>
			</Box>
			<Box direction='row'>
				<CTAButton icon={
					<Github/>
				}/>
				<Text size='xxlarge'><Text size='xxlarge' weight='bolder'>check my github</Text> to see work samples.</Text>
			</Box>
		</Box>
	)
}