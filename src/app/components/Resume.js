import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS
import { MailOption, Clipboard, Github, Close } from 'grommet-icons'
import {
	Box,
	Text,
	Layer,
	Stack,
	Heading,
	Anchor,
	Button,
	Dropbutton 
} from 'grommet'
import Theme, { sim } from './Theme'

// ACTIONS
import { toggle } from '../actions/resume'

function Profile() {
	return (
		<Box>
			<Heading level={2}>Profile</Heading>
			<Box margin={{bottom: 'small'}}>
				<Text>Full-stack web developer of 10+ years experience. Skills include Javascript, NodeJS, CSS3, HTML5, Adobe CC Suite, and a variety of frameworks for server, web, mobile, and internet-of-things. Strong front-end web background, particularly in React & Redux applications, with a focus on the end user experience.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Development skills include ECMAScript 5/6/7, NodeJS, React, Redux, Babel, Webpack, and Git. Server and database skills include MongoDB, Redis, Hapi, & Koa. Deep experience in CSS, SCSS, CSS-in-JS, and related styling stack configurations. Built responsive web apps, progressive web apps, command line tools, Chrome extensions, and decentralized apps leveraging blockchain.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Internet-of-things experience includes Raspberry Pi, Arduino, Tessel, and messaging protocols such as Web Sockets for interactive and real-time solutions. Designed and developed hardware-driven user experiences for professional and creative settings.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Comfortable in a variety of team styles. Strong ability to deal with edge cases. Loves product managers, designers, and engineers alike. Fights for the user's experience. Independently published sci-fi novelist.</Text>
			</Box>
		</Box>
	)
}

function Employment({
	title,
	employer,
	start,
	end,
	copy
}) {
	return (
		<Box>
			<Heading level={3}>{title} at {employer} — {start} - {end}</Heading>
			<Text>{copy}</Text>
		</Box>
	)
}

// shorthand components
const ModalClose = connect(
	() => new Object(),
	function (dispatch) {
		return {
			actions: bindActionCreators({
				toggle
			}, dispatch)
		}
	}
)(
	({ actions }) => {
		const { toggle } = actions
		return (
			<Button
				icon={
					<Close/>
				}
				onClick={() => toggle()}
				label='Close'
				css={`
					align-self: flex-end;
				`}
			/>
		)
	}
)

const DownloadResume = connect(
	() => new Object(),
	function (dispatch) {
		return {
			actions: bindActionCreators({

			}, dispatch)
		}
	}
)(
	({ actions }) => {
		return (
			<DropButton
          label="Open"
          open={open}
          onOpen={onOpen}
          onClose={onClose}
          dropContent={<DropContent onClose={onClose} />}
          dropProps={{ align: { top: "bottom" } }}
        />
		)
	}
)



function ModalBox({ active, children }) {
	return active ? (
		<Box
			pad='large'
			align='center'
			css={`
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				z-index: 205 !important;
				transition: all 0.3s ease-in-out;
				background: ${active ? 'rgba(255,255,255,0.5)' : 'transparent' };
		`}>
			<Box 
				width='xlarge'
				background={sim.global.colors.neutralDarkGray}
				round='small'
				pad='large'
				css={`
					box-shadow: 0 0 30px ${sim.global.colors.neutralGray};
					max-width: 100%;										
					position: relative;
				`}>
				{ children }
			</Box>
		</Box>
	) : null
}

function mapStateToProps(state, ownProps) {
	const { active } = state.resume

	return {
		active
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({
			toggle
		}, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	function Resume({ active, actions }) {
		return (
			<ModalBox active={active}>
				<ModalClose/>
				<Heading level={1} weight='medium'>
					Daniel Anderson
				</Heading>
				<Anchor href='mailto:daniel@smallinvisiblemachines.com'>daniel@smallinvisiblemachines.com</Anchor>
				<Profile/>
				<Employment
					title={'Senior Front-End Developer'}
					employer={'Twitter'}
					start={'September 2019'}
					end={'March 2020'}
					copy={`Developed single-page web apps using React, Redux, Webpack, and related technologies on the Salesforce platform. Integrated open source technologies with proprietary frameworks and internal APIs. Gathered, curated, and documented critical requirements from key stakeholders. Developed internal applications to solve broad user experience and automation problems that drive sales and revenue.`}
				/>
				<Employment
					title={'Director of Engineering'}
					employer={'Magnitude.io'}
					start={'October 2018'}
					end={'September 2019'}
					copy={`Developed UIs & APIs using NodeJS, React, and similar technologies for an ed-tech platform serving K-12 students conducting experiments in low earth orbit and on the International Space Station using real-time IoT devices. Maintained and upgraded existing codebases while guiding new feature development under a SPA and PWA strategy. Defined project goals with stakeholders and managed a small team across timezones.`}
				/>
				<Employment
					title={'Co-Founder, Lead Developer'}
					employer={'HAVYN, Inc.'}
					start={'January 2016'}
					end={'October 2018'}
					copy={`Co-founded HAVYN, Inc. as Lead Developer. Developed end-to-end Javascript software architecture for smart locker IoT product. Developed cloud-based NodeJS server to manage all devices in the field in real-time using message-passing protocols such MQTT and SMS. Designed and developed a mobile application with React Native. Prototyped IoT product with Linux SBC platforms. Guided technology solutions and designed user interactions consistent with brand experience.`}
				/>
				<Employment
					title={'Artist In Residence'}
					employer={'Merchants of Reality'}
					start={'May 2016'}
					end={'May 2017'}
					copy={`Joined artist-in-residence program at Merchants of Reality, 501(c)3 arts-oriented nonprofit. Projects included projection-mapped installations with real-time, wearable interfaces; a 15' water-borne LED pyramid at a coastal arts festival; and a full-length science fiction novel. Responsibilities during residency included: project management, volunteer management, crowdfunding, grant writing, PR, design, web development, and maintenance of a historic venue space circa 1906 in downtown San Francisco.`}
				/>
			</ModalBox>
		)
	}
)