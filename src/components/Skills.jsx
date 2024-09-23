import React from 'react'
import Section from './Section'
import { mySkillsSet } from '../constants/constants'
import checked from '../assets/checked.svg'

const Skills = () => {
	return (
		<Section crosses>
			<div className="container lg:flex">
				<div className="max-w-[40rem]">
					<h2 className="h2 mb-4 md:mb-8">My Skills Set</h2>

					<ul className="max-w-[30rem] mb-10 md:mb-14">
						{mySkillsSet.map(item => (
							<li className="mb-3 py-3" key={item.id}>
								<div className="flex items-center">
									<img src={checked} width={30} height={30} alt="checked icon" />
									<h6 className="body-2 ml-5 text-n-1">{item.title}</h6>
								</div>
								{item.text && <p className="text-[0.777rem] mt-3 text-n-4">{item.text}</p>}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	)
}

export default Skills
