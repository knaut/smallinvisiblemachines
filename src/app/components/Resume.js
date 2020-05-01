import React, { Component } from 'react'

// COMPONENTS
import { MailOption, Clipboard, Github } from 'grommet-icons'
import { Box, Text, Layer, Stack, Heading, Anchor } from 'grommet'
import Theme, { sim } from './Theme'

function Profile() {
	return (
		<Box>
			<Heading level={2}>Profile</Heading>
			<Box margin={{bottom: 'small'}}>
				<Text>Full-stack web developer of 10+ years experience. Skills include Javascript, NodeJS, CSS3, HTML5, Adobe CC Suite, and a variety of frameworks for server, web, mobile, and internet-of-things. Strong front-end web background, particularly in React & Redux applications, with a focus on the end user experience.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Development skills include ECMAScript 5/6/7, NodeJS, React, Redux, Babel, Webpack, and Git. Server and database skills include MongoDB, Redis, Hapi, & Koa. Deep experience in CSS, SCSS, CSS-in-JS, and related styling stack configurations. Built responsive web apps, progressive web apps, command line tools, Chrome extensions, and decentralized apps leveraging blockchain.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Internet-of-things experience includes Raspberry Pi, Arduino, Tessel, and messaging protocols such as Web Sockets for interactive and real-time solutions. Designed and developed hardware-driven user experiences for professional and creative settings.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Comfortable in a variety of team styles. Strong ability to deal with edge cases. Loves product managers, designers, and engineers alike. Fights for the user's experience. Independently published sci-fi novelist.</Text>
			</Box>
		</Box>
	)
}

function Employment({
	title,
	employer,
	start,
	end,
	copy
}) {
	return (
		<Box>
			<Heading level={3}>{title} at {employer} — {start} - {end}</Heading>
			<Text>{copy}</Text>
		</Box>
	)
}

export default function Resume() {
	return (
		<Layer plain>
			<Box
				width='xxlarge'
				background={sim.global.colors.neutralDarkGray}
				round='small'
				pad='large'
				css={`
					box-shadow: 0 0 30px ${sim.global.colors.neutralGray};
					position: relative;
					z-index: 205 !important;
				`}
			>
				<Heading level={1} weight='medium'>
					Daniel Anderson
				</Heading>
				<Anchor href='mailto:daniel@smallinvisiblemachines.com'>daniel@smallinvisiblemachines.com</Anchor>
				<Profile/>
			</Box>
		</Layer>
	)
}