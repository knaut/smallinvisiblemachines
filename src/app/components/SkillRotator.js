import React, { Component, Fragment } from 'react'

// COMPONENTS
import { Heading, Box } from 'grommet'
import Theme, { sim } from './Theme'

class Skill extends Component {
	state = {
		active: this.props.active,
		entering: this.props.entering
	}

	render() {
		const { children } = this.props
		const {
			active,
			entering
		} = this.state

		return (
			<span css={`
				opacity: ${active ? '1' : '0' };
				filter: blur(${entering ? '10px' : '0'});
				transition: all 0.7s ease-in-out;
			`}>
				{children}
			</span>
		)
	}
}

export default class SkillRotator extends Component {
	state = {
		skills: [
			'progressive web apps',
			'user experience design',
			'front-end development',
			'server-side development',
			'command line tools',
			'Javascript',
			'ReactJS',
			'NodeJS',
			'HTML5 & CSS3',
			'cloud architecture',
			'databases',
			'responsive web apps',
			'internet-of-things'
		],
		interval: null,
		index: 0
	}

	componentDidMount() {
		const skillsLength = this.state.skills.length

		this.state.interval = setInterval(() => {
 // 			const index = Math.floor(Math.random() * skillsLength)
 // 
 // 			this.setState({
 // 				index
 // 			})


			const index = this.rotateIndex()

			this.setState({
				index
			})


			console.log(this.state)
		}, 3000)
	}

	rotateIndex() {
		const { 
			index, 
			skills
		} = this.state

		let nextIndex = index + 1

		if (nextIndex > skills.length) {
			nextIndex = 0
		}

		return nextIndex
	}

	render() {
		const { skills, index } = this.state

		return (
			<span>
				{skills[index]}
			</span>
		)
	}
}