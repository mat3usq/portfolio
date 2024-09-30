import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { exprojectsInfo, languageColors } from '../constants/constants'
import Section from './Section'
import { textVariant } from '../constants/motions'
import { FaGithub } from 'react-icons/fa'

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: 'linear-gradient(135deg, #1d1836 0%, #2e2a41 100%)',
				color: '#FFFFFF',
				border: '2px solid #3F3A52',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
				borderBottom: '3px solid #FFFFFF',
				borderRadius: '12px',
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
					<img src={experience.icon} alt={experience.company_name} className="w-[70%] h-[70%] object-contain" />
				</div>
			}>
			<div>
				<h3 className="text-[24px] font-bold" style={{ color: experience.iconBg }}>
					{experience.title}
				</h3>
				<p className="text-n-3 text-[16px] font-semibold font-code m-0">{experience.company_name}</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.description.map((desc, index) => (
					<li
						key={`experience-desc-${index}`}
						className="text-n-1 font-sans text-[13px] pl-1 tracking-wide leading-relaxed">
						{desc}
					</li>
				))}
			</ul>

			<div className="mt-4 flex items-center">
				<div className="flex flex-wrap">
					{experience.languages.map((language, index) => (
						<span
							key={`language-${index}`}
							className="mr-2 mb-2 px-2 py-1 text-[13px] font-code font-semibold"
							style={{
								color: languageColors[language] || '#fff',
								border: `1px solid ${languageColors[language] || '#fff'}`,
								borderRadius: '12px',
							}}>
							{language}
						</span>
					))}
				</div>
				<a
					href={experience.link}
					target="_blank"
					rel="noopener noreferrer"
					className="w-[130px] ml-auto text-[12px] text-blue-500 hover:underline">
					Show More
				</a>
			</div>
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

					<VerticalTimelineElement
						iconStyle={{
							background: '#000',
							color: '#fff',
							cursor: 'pointer',
						}}
						icon={
							<a
								href="https://github.com/mat3usq"
								target="_blank"
								rel="noopener noreferrer"
								className="w-full h-full"
								aria-label="GitHub Profile">
								<FaGithub />
							</a>
						}
						date=""
						contentStyle={{ display: 'none' }}
						contentArrowStyle={{ display: 'none' }}
					/>
				</VerticalTimeline>
			</div>
		</Section>
	)
}

export default Exprojects
