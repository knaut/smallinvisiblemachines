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

/*
export default function SkillRotator() {
	const [ skillIndex, setSkillIndex ] = React.useState(0)

	React.useEffect(() => {
		const intervalId = setInterval(() => setSkillIndex(
			randomSkillIndex()
		), 3000)
	})

	return (
		<span>
			<TextTransition
				text={ skills[ skillIndex ] }
				springConfig={presets.default}
			/>
		</span>
	)
}
*/

// 
// class Skill extends Component {
// 	state = {
// 		active: this.props.active,
// 		entering: this.props.entering
// 	}
// 
// 	render() {
// 		const { children } = this.props
// 		const {
// 			active,
// 			entering
// 		} = this.state
// 
// 		return (
// 			<span css={`
// 				opacity: ${active ? '1' : '.5' };
// 				filter: blur(${entering ? '2px' : '0'});
// 				transition: all 0.7s ease-in-out;
// 			`}>
// 				{children}
// 			</span>
// 		)
// 	}
// }

/*
export function Skill({
	active,
	entering,
	exiting,
	children
}) {
	const activeStyles = `
		opacity: 1;
		filter: blur(0);
		top: 0;
	`

	const exitingStyles = `
		opacity: 0;
		filter: blur(10px);
		top: 10px;
	`

	const enteringStyles = `
		opacity: 0;
		filter: blur(10px);
		top: -10px;
	`

	return (
		<span css={`
			transition: all 0.7s ease-in-out;
			${ active ? activeStyles : '' }
			${ exiting ? exitingStyles : '' }
			${ entering ? enteringStyles : '' }
		`}>
			{children}
		</span>
	)
}
*/


export default class SkillRotator extends Component {
	state = {
		skills,
		interval: null,
		active: randomSkillIndex(),

		// when the top phrase is active, it needs an "exit" state to trigger
		// the exit animation

		// when the bottom phrase is not yet entering, its default state should be hidden.
		// when it enters, it should animate into an active state.

		// these two transitions should happen at the same time.


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
					text={ skills[ active ] }
					springConfig={presets.default}
				/>
			</span>
		)
	}
}
