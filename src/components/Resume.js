import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// COMPONENTS
import {
	MailOption,
	Download,
	Clipboard,
	Github,
	Close,
	DocumentPdf,
	DocumentWord,
	DocumentTxt,
	FormDown

} from 'grommet-icons'

import {
	Box,
	Menu,
	Text,
	Layer,
	Stack,
	Heading,
	Anchor,
	Button,
	DropButton,
} from 'grommet'
import Theme, { sim } from './Theme'

// ACTIONS
import { toggle } from '../actions/resume'

const ExtraCondensedMedium = `
	font-family: acumin-pro-extra-condensed, sans-serif;
	font-weight: 500;
	font-style: normal;
`
const ExtraCondensedBlack = `
	font-family: acumin-pro-extra-condensed, sans-serif;
	font-weight: 800;
	font-style: normal;
`
const Medium = `
	font-family: acumin-pro, sans-serif;
	font-weight: 500;
	font-style: normal;
`


function Profile() {
	return (
		<Box>
			<Heading 
				margin={{ bottom: 'xsmall' }}
				css={ExtraCondensedMedium}
			>Profile</Heading>
			<Box margin={{bottom: 'small'}}>
				<Text>Full-stack web developer of 10+ years experience. Skills include Javascript, CSS3, HTML5, Adobe Creative Cloud Suite, and a variety of frameworks for front-end, server, mobile, and cloud applications. Strong background in user experience design.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Development skillset features Javascript, NodeJS, Babel, Webpack, React, Redux, and command line tools including git and npm. Database skills include MongoDB, Mongoose, and Redis. Server development skills include, Express, Hapi, and Koa. Additional development skills in data visualization (d3.js), responsive and progressive web apps, chrome extensions, and decentralized apps leveraging blockchain authentication.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Hardware prototyping and internet-of-things skillset includes Single-Board Computers (SBCs) and microcontrollers such as Raspberry Pi, Arduino, and Tessel. Skilled in developing cloud-driven applications for in-the-field IoT devices in consumer, educational, and scientific settings. Experience integrating Web Sockets, Open Sound Control (OSC), and related real-time message-passing protocols across the stack.</Text>
			</Box>
			<Box margin={{bottom: 'small'}}>
				<Text>Comfortable in a variety of team styles. Strong ability to deal with edge cases. Loves product managers, designers, and engineers alike. A big-picture thinker who accounts for subtle details. Loves to craft excellent user experiences. Science fiction novelist.</Text>
			</Box>
		</Box>
	)
}

function Skills() {
	const skills = [
		'Javascript (ECMAScript 2015-2019)', 'NodeJS', 'ReactJS', 'Redux', 'CSS3', 'HTML5', 'Git', 'NPM (Node Package Manager)', 'Webpack', 'Storybook', 'styled-components', 'CSS-in-JS', 'Sass', 'Less', 'Stylus', 'Grommet', 'Bootstrap', 'Core UI', 'Express', 'Hapi', 'Koa', 'MongoDB', 'Mongoose', 'Redis', 'Raspberry Pi', 'Arduino', 'Tessel', 'Heroku', 'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Terraform', 'Adobe Creative Cloud', 'Adobe Photoshop', 'Adobe Premiere', 'Adobe Acrobat', 'Adobe AfterEffects', 'Balsamiq Mockups', 'WebSockets', 'Open Sound Control (OSC)', 'VDMX', 'MadMapper', 'MySQL (SQL)', 'C', 'Rust', 'Linux', 'command line', 'Sublime Text', 'chrome extensions', 'progressive web apps', 'responsive web apps', 'decentralized apps', 'blockchain authentication'
	]

	return (
		<Box>
			<Heading
				margin={{ bottom: 'xsmall' }} 
				css={ExtraCondensedMedium}
			>Skills</Heading>
			<ul css={'margin: 0; padding: 0;'}>
				{ skills.map(item => <li css={`display: inline;`}>{item}, </li>) }
			</ul>
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
			<Heading 
				level={3}
				margin={{ bottom: 'xsmall' }}
				css={Employment}
			>{title} {employer ? `at ${employer}` : ''} — {start} - {end}</Heading>
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
			/>
		)
	}
)

function DownloadResume() {
	const [ open, setOpen ] = React.useState()
	
	function handleOpen() {
		setOpen(true)
	}

	function handleClose() {
		setOpen(false)
	}

	return (
		<Menu
			primary
			css={`
				border-radius: 5px !important;
			`}
		  dropProps={{
		    align: { top: "bottom", left: "left" },
		    elevation: "xlarge",
		    background: sim.global.colors.neutralDarkGray
		  }}
		  dropBackground={sim.global.colors.neutralLight}
		  label='Download Resume as File'
		  icon={<Download color={sim.global.colors.neutralBlack}/>}
		  items={[
		    { 
		     label: <Box alignSelf='center'>PDF</Box>,
		     icon: <Box pad='xsmall'><DocumentPdf/></Box>,
		     onClick: () => {} 
		    },
		    { 
		     label: <Box alignSelf='center'>Word Doc</Box>,
		     icon: <Box pad='xsmall'><DocumentWord/></Box>,
		     onClick: () => {} 
		    },
		    { 
		     label: <Box alignSelf='center'>Plain Text</Box>,
		     icon: <Box pad='xsmall'><DocumentTxt/></Box>,
		     onClick: () => {} 
		    }
		  ]}
		/>
		
     
	)
}

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
				z-index: 19 !important;
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

function Header() {
	return (
		<Fragment>
			<Heading 
				size='large'
				margin={{bottom: 'xxsmall'}}
				css={ExtraCondensedBlack}>
				Daniel Anderson
			</Heading>
			<ContactLinks/>
		</Fragment>
	)
}

function ContactLinks() {
	return (
		<Fragment>
			<Anchor href='mailto:daniel@smallinvisiblemachines.com'>daniel@smallinvisiblemachines.com</Anchor>
			<Anchor href='https://www.github.com/knaut'>github.com/knaut</Anchor>
		</Fragment>
	)
}

function Education() {
	return (
		<Fragment>
			<Heading
				margin={{ bottom: 'xsmall' }}
				css={ExtraCondensedMedium}
			>
				Education
			</Heading>
			<Text>Maryland Institute College of Art - 2006 - 2008</Text>
			<Text>Painting Major, Creative Writing Minor</Text>
		</Fragment>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	function Resume({ active, actions }) {
		return (
			<ModalBox active={active}>

				<Box
					direction='row'
					justify='between'
				>
					<DownloadResume/>

					<ModalClose/>
				</Box>
				<Header/>
				<Profile/>
				<Skills/>
				<Employment
					title={'Senior Front-End Developer'}
					employer={'Twitter'}
					start={'September 2019'}
					end={'March 2020'}
					copy={`Developed single-page web apps using React, Redux, Webpack, and related technologies for the Salesforce platform. Integrated open source technologies with proprietary frameworks (Salesforce Lightning, Visualforce) and internal APIs. Gathered, curated, and documented critical requirements from key stakeholders. Developed internal applications and workflows to solve broad user experience and automation problems that drive sales.`}
				/>
				<Employment
					title={'Director of Engineering'}
					employer={'Magnitude.io'}
					start={'October 2018'}
					end={'September 2019'}
					copy={`Developed full stack applications using NodeJS, ReactJS, and related technologies for an ed-tech platform serving K-12 students conducting experiments in low earth orbit and on the International Space Station using real-time devices. Maintained and upgraded existing codebases while guiding new feature development under a SPA and PWA strategy. Defined project goals with stakeholders and managed a small team across timezones.`}
				/>
				<Employment
					title={'Co-Founder, Lead Developer'}
					employer={'HAVYN, Inc.'}
					start={'January 2016'}
					end={'October 2018'}
					copy={`Co-founded HAVYN, Inc. as Lead Developer. Developed end-to-end software architecture for consumer smart locker product. Developed cloud-based NodeJS server to manage a fleet of devices in real-time. Developed hardware prototype applications in NodeJS on Linux SBCs and embedded systems, leveraging Optical Character Recognition (OCR) and SMS messaging. Developed internal CLIs to automate key tasks and workflows. Designed and developed front-end web user experience, dashboards, and marketing websites. Designed and developed a mobile application with React Native. Guided technology solutions and developed user interactions consistent with desired brand experience.`}
				/>
				<Employment
					title={'Artist In Residence'}
					employer={null}
					start={'May 2016'}
					end={'May 2017'}
					copy={`Joined artist-in-residence program at Merchants of Reality, a 501(c)3 arts-oriented nonprofit. Projects included a projection-mapped video installation at St. Patrick’s Cathedral of San Francisco; a 15' water-borne LED-lit pyramid at Symbiosis arts festival; and a full-length science fiction novel. Responsibilities during residency included: project management, volunteer management, crowdfunding, grant writing, PR, design, web development, and maintenance of a historic venue space circa 1906 in downtown San Francisco.`}
				/>
				<Employment
					title={'UI Developer'}
					employer={'Avenue Code'}
					start={'March 2015'}
					end={'March 2016'}
					copy={`Developed UIs with ReactJS, Redux, Webpack, and other modern development tools. Developed stateful UI components with BackboneJS, MarionetteJS, and Sass for high profile retail clients that serve millions of customers across Macy’s.com and Bloomingdales.com.`}
				/>
				<Employment
					title={'Software Developer'}
					employer={'Say Media'}
					start={'February 2014'}
					end={'January 2015'}
					copy={`Developed features for a UX-critical single page application using AngularJS, NodeJS, and open-source libraries. Worked closely with designers, QA, stakeholders, and with clientele directly to deliver an award-winning CMS publishing platform.`}
				/>
				<Employment
					title={'Freelance Web Development & Design'}
					employer={null}
					start={'2009'}
					end={'Present'}
					copy={`Portfolio includes applications and websites for major brands and institutions including Stanford University, Herman Miller, Movies.com, and Sports Authority. Worked with design agencies, government organizations, consulting agencies, non-profit organizations, published novelists, and independent producers of all kinds.`}
				/>
				<Education/>
				<Box margin={{ top: 'medium' }}>
					<ContactLinks/>
				</Box>
				<Box
					direction='row'
					justify='between'
					margin={{top: 'medium'}}
				>
					<DownloadResume/>
					<ModalClose/>
				</Box>
			</ModalBox>
		)
	}
)