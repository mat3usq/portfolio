import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { exprojectsInfo } from '../constants/constants'
import Section from './Section'
import { textVariant } from '../constants/motions'

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: 'linear-gradient(135deg, #1d1836 0%, #2e2a41 100%)',
				color: '#FFFFFF',
				border: '2px solid #3F3A52',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
			}}
			contentArrowStyle={{ borderRight: '8px solid #2e2a41' }}
			date={experience.date}
			iconStyle={{
				background: experience.iconBg,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
				</div>
			}>
			<div>
				<h3 className=" text-[24px] font-bold" style={{ color: experience.iconBg }}>
					{experience.title}
				</h3>
				<p className="text-n-3 text-[16px] font-semibold font-code m-0">{experience.company_name}</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.description.map((desc, index) => (
					<li
						key={`experience-desc-${index}`}
						className="text-n-1 font-sans text-[14px] pl-1 tracking-wide leading-relaxed">
						{desc}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	)
}

const Exprojects = () => {
	return (
		<Section crosses id={'exprojects'}>
			<motion.div variants={textVariant()} initial="hidden" animate="show" className="container">
				<h6 className="body-2 text-n-3 mb-4 ml-5">Detailed Overview of My Career and Key Projects</h6>
				<h2 className="h2 text-n-1 mb-8 ml-5">What I Have Done So Far</h2>
			</motion.div>

			<div className="mt-20 mx-5 flex flex-col">
				<VerticalTimeline>
					{exprojectsInfo.map((experience, index) => (
						<ExperienceCard key={`experience-${index}`} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</Section>
	)
}

export default Exprojects
