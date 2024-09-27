import React from 'react'
import Section from './Section'
import { mySkillsSet } from '../constants/constants'
import checked from '../assets/checked.svg'
import portfolioLogo from '../assets/logos/portfolioLogo.svg'
import { skillsIcons } from '../constants/constants'
import { BottomCurve, LeftCurve, RightCurve, TopCurve } from '../assets/svgs/Curves'
import Tech from './Tech'

const Skills = () => {
	return (
		<Section crosses id={'skills'}>
			<div className="container lg:flex lg:items-center">
				<div className="relative max-w-[40rem] z-20">
				<h2 className="h2 mb-4 md:mb-8">My Skills Set</h2>

					<ul className="max-w-[30rem] mb-10 md:mb-14">
						{mySkillsSet.map((item, index) => (
							<li className="mb-3 py-3" key={index}>
								<div className="flex items-center">
									<img src={checked} width={30} height={30} alt="checked icon" />
									<h6 className="body-2 ml-5 text-n-1">{item.title}</h6>
								</div>
								{item.text && <p className="text-[0.777rem] mt-3 text-n-4">{item.text}</p>}
							</li>
						))}
					</ul>
				</div>
				<div className="relative lg:ml-auto xl:w-[38rem] mt-20">
					<div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
						<div className="flex w-56 aspect-square m-auto border border-n-6 rounded-full">
							<div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
								<div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
									<img src={portfolioLogo} width={48} height={48} alt="portfolioLogo" />
								</div>
							</div>
						</div>
						<ul>
							{skillsIcons.map((icon, index) => (
								<li
									key={icon.id}
									className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
									<div
										className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
											index * 45
										}`}>
										<img
											className="m-auto"
											width={icon.width}
											height={icon.height}
											alt={icon.title}
											src={icon.source}
										/>
									</div>
								</li>
							))}
						</ul>
						<TopCurve className="z-10" />
						<BottomCurve className="z-10" />
						<LeftCurve className="z-10" />
						<RightCurve className="z-10" />
					</div>
				</div>
			</div>
			<h5 className="tagline mt-16 mb-10 text-center text-n-1">Other technologies I know well</h5>
			<Tech />
		</Section>
	)
}

export default Skills
