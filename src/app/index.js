import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'

// REDUX
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

// COMPONENTS
import { Heading, Box, Text, Anchor } from 'grommet'
import Theme, { sim } from './components/Theme'
import Layout from './components/Layout'
import Logo from './components/Logo'
import Avatar from './components/Avatar'
import Greeting from './components/Greeting'
import CTAs from './components/CTAs'
import Resume from './components/Resume'
import Copyright from './components/Copyright'

// UTILS
import generateStore from './utils/generateStore'

const history = createBrowserHistory()
const store = generateStore(history)

function Splash() {
	return (
		<Fragment>
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
		</Fragment>
	)
}

function App() {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Theme>
						<Box css={`position: relative;`}>
							<Splash/>
							<Resume/>
							
							<Box pad='xlarge' align='center' background={sim.global.colors.neutralBlack}>
								<Box
									width='xlarge'
									align='center'
								>
									<Copyright/>
								</Box>
							</Box>							
						</Box>
					</Theme>
				</Switch>
			</ConnectedRouter>
		</Provider>
	)
}

render(<App/>, document.getElementById('root'))