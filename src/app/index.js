import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import Theme from './components/Theme'

function App() {
	return (
		<Theme>
			<div>SIM</div>
		</Theme>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'))