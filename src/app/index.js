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
			<Layout color={sim.global.colors.neutralLight}>
				<Box width='large'>
					<Logo 
						arrangement={3}
						color={sim.global.colors.neutralDarkGray}
					/>
				</Box>
				<Box width='large'>
					<Greeting/>
				</Box>
				<CTAs/>
			</Layout>
		</Theme>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))