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

/*

<Layout color={sim.global.colors.neutralLight}>
				<Box width='large' background='red'>
					<Logo 
						arrangement={3}
						color={sim.global.colors.neutralDarkGray}
					/>
				</Box>
				<Box width='large' background='red'>
					<Greeting/>
				</Box>
				<CTAs/>
			</Layout>

			*/

function App() {
	return (
		<Theme>
			<Box pad='medium'>
				<Box 
					width='50%' 
					background='#ccc'
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
					background='#ccc'
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