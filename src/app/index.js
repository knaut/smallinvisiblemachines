import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import { Heading, Box } from 'grommet'
import Theme, { sim } from './components/Theme'
import Layout from './components/Layout'
import Logo from './components/Logo'
import Avatar from './components/Avatar'
import Greeting from './components/Greeting'
import CTAs from './components/CTAs'

function App() {
	return (
		<Theme>
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
			<Box pad='medium' align='center'>
				<Box
					width='xlarge'
					align='center'
				>
					<Greeting/>
					<CTAs/>
				</Box>
			</Box>
		</Theme>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))