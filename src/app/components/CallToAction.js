import React, { Component } from 'react'

// COMPONENTS
import { MailOption, Clipboard, Github } from 'grommet-icons'
import { Box, Text, Anchor } from 'grommet'
import Theme, { sim } from './Theme'

export default class CallToAction extends Component {
	state = {
		isHover: false
	}

	handleMouseEnter = () => this.setState({ isHover: true })
	handleMouseLeave = () => this.setState({ isHover: false })

	render() {
		const {
			icon,
			iconColor,
			headline,
			headlineColor,
			subline,
			url
		} = this.props
		
		const { isHover } = this.state

		return(
			<Box
				direction='row'
				margin='xsmall'
				css={`
					position: relative;
					z-index: 10;
				`}
			>
				<Box
					alignSelf='start'
					margin={{right: 'small'}}
					pad='small'
					border={isHover ? {size: 'medium', color: sim.global.colors.neutralBlack} : {size: 'medium', color: 'transparent'}}
					round='full'
					background={isHover ? iconColor : false}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					css={`
						transition: 0.2s all ease-in-out;
						cursor: pointer;
					`}
				>
					{ 
						React.cloneElement(icon, { 
							color: sim.global.colors.neutralBlack,
							size: 'large'
						}) 
					}	
				</Box>
				<Box alignSelf='center'>
					<Text>
						<Anchor
							href={url}
							color={isHover ? headlineColor : sim.global.colors.neutralBlack}
							onMouseEnter={this.handleMouseEnter}
							onMouseLeave={this.handleMouseLeave}
							css={`
								transition: 0.2s all ease-in-out;
								cursor: pointer;
								text-decoration: none !important;
							`}
						>
							<Text weight='bold'  size='xxlarge'>{headline}</Text>
						</Anchor>
						<Text size='xxlarge'>{subline}</Text>
					</Text>
				</Box>
			</Box> 
	 	)
	}	
}