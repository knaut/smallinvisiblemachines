import React, { Component, Fragment } from 'react'

// COMPONENTS
import { Heading, Box } from 'grommet'
import TextTransition, { presets } from 'react-text-transition'
import Theme, { sim } from './Theme'

const skills = [
	'front-end development',
	'progressive web apps',
	'user experience design',
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
]

// pick a random number that isn't already in a given array
function randomSkillIndex( cache ) {
	const random = Math.floor(Math.random() * skills.length)
	
	if (!cache) {
		return random
	} else {
		if (cache.indexOf(random) > -1) {
			// keep checking until we find one.
			return randomSkillIndex(cache)
		} else {
			return random
		}
	}
}

export default class SkillRotator extends Component {
	state = {
		skills,
		interval: null,
		active: randomSkillIndex(),
		cache: [0]
	}

	componentDidMount() {
		const skillsLength = this.state.skills.length

		this.interval = setInterval(() => this.randomSkill(), 3000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	// pick a random skill from our list without repeats
	randomSkill() {
		const { 
			cache,
			active,
			entering
		} = this.state

		const random = randomSkillIndex(cache)

		cache.push(random)

		if (cache.length === 5) {
			cache.shift()
		}

		this.setState({
			cache,
			active: random,
		})
	}

	render() {

		const { 
			skills, 
			active,
		} = this.state
				
		return (
			<span>
				<TextTransition
					css={`
						// override causes issues with width, needs fixing
						white-space: nowrap;
						display: inline-block !important;
					`}
					text={ skills[ active ] }
					springConfig={presets.default}
				/>
			</span>
		)
	}
}
