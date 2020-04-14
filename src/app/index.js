import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// COMPONENTS
import Theme from './components/Theme'

class App extends Component {
	render() {
		return (
			<Theme>
				<div>SIM</div>				
			</Theme>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))