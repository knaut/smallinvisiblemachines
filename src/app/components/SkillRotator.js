import React, { Component, Fragment } from 'react'

// COMPONENTS
import { Heading, Box } from 'grommet'
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
				opacity: ${active ? '1' : '.5' };
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
		skills,
		interval: null,
		active: 0,
		cache: [0]
	}

	componentDidMount() {
		const skillsLength = this.state.skills.length

		this.state.interval = setInterval(() => {

			this.randomSkill()

		}, 3000)
	}

	// pick a random number that isn't already in our cache
	randomIndex( cache ) {
		const random = Math.floor(Math.random() * skills.length)

		if (!cache) {
			return random
		} else {
			if (cache.indexOf(random) > -1) {
				return this.randomIndex(cache)
			} else {
				return random
			}
		}
	}

	// pick a random skill from our list without repeats
	randomSkill() {
		const { 
			cache,
			active,
			entering
		} = this.state

		const random = this.randomIndex(cache)

		cache.push(random)

		if (cache.length === 5) {
			cache.shift()
		}

		this.setState({
			cache,
			active: random
		})

	}

	render() {
		const { 
			skills, 
			active,
			entering
		} = this.state

		return (
			<span>
				<Skill active>{skills[active]}</Skill>
				<Skill entering>{skills[entering]}</Skill>
			</span>
		)
	}
}