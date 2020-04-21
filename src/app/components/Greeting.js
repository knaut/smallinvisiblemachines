import React, { Component } from 'react'

// COMPONENTS
import { Heading, Box } from 'grommet'
import Theme, { sim } from './Theme'
import Avatar from './Avatar'

export default function Greeting() {
	const skills = [
		'progressive web apps',
		'user experience design',
		'front-end development',
		'server-side development',
		'command line tools',
		'Javascript',
		'ReactJS',
		'NodeJS',
		'HTML5 & CSS3',
		'cloud architecture',
		'databases',
		'responsive web apps',
		'internet-of-things'
	]

	return (
		<Box width='xlarge'>
			<Box direction='row-responsive' align='baseline'>
				<Heading
					level={1}
					size='large'
					color={sim.global.colors.primaryBlue}
					margin={{
						bottom: 'xsmall'
					}}
				>
					<span css={`font-style: italic;`}>Hi. My name is </span>
					<span css={`font-weight: bolder; font-style: italic;`}>Daniel.</span>
				</Heading>
				<Box margin='small'>
					<Avatar size='small'/>
				</Box>
			</Box>
			<Heading
				level={1}
				size='large'
				color={sim.global.colors.primaryBlue}
				margin={{
					top: 'xsmall',
					bottom: 'xsmall'
				}}
			>
				<span css={`font-style: italic;`}>I do... </span>
				<span css={`font-weight: 800;`}>{skills[Math.floor(Math.random() * skills.length)]}.</span>
			</Heading>
		</Box>
	)
}