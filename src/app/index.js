import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import Theme, { sim } from './components/Theme'
import Layout from './components/Layout'
import Logo from './components/Logo'

function App() {
	return (
		<Theme>
			<Layout color={sim.global.colors.neutralLight}>
				<Logo 
					arrangement={3}
					color={sim.global.colors.neutralDarkGray}
				/>
			</Layout>
		</Theme>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))