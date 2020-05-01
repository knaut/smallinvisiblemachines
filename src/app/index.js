import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import { Heading, Box, Text, Anchor } from 'grommet'
import Theme, { sim } from './components/Theme'
import Layout from './components/Layout'
import Logo from './components/Logo'
import Avatar from './components/Avatar'
import Greeting from './components/Greeting'
import CTAs from './components/CTAs'
import Resume from './components/Resume'

function Copyright() {
	return (
		<Fragment>
			<Text size='medium'>© {new Date().getFullYear()}  Daniel A. Anderson. All rights reserved.</Text>
			<Text size='medium'>
				<Anchor href='mailto:daniel@smallinvisiblemachines.com'>daniel@smallinvisiblemachines.com</Anchor>
			</Text>
		</Fragment>
	)
}

function App() {
	return (
		<Theme>
			<Box css={`position: relative;`}>
				<Box id='top' css={`
						min-height: 100%;
				    min-height: -moz-available;
				    min-height: -webkit-fill-available;
				    min-height: fill-available;
				`} background={sim.global.colors.neutralLight}>
					<Box pad='medium'>
						<Box 
							width='50%' 
						>
							<Logo
								arrangement={3}
								color={sim.global.colors.neutralDarkGray}
							/>
						</Box>
					</Box>
					<Box pad='medium' align='center' margin={{bottom:'xlarge'}}>
						<Box
							width='xlarge'
							align='center'
						>
							<Greeting/>
							<CTAs/>
						</Box>
					</Box>
				</Box>
				<Box pad='xlarge' align='center' background={sim.global.colors.neutralBlack}>
					<Box
						width='xlarge'
						align='center'
					>
						<Copyright/>
					</Box>
				</Box>
				<Resume/>
			</Box>
		</Theme>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))