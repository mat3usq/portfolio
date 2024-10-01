import React from 'react'
import Section from './Section'
import gradientBall from '../assets/gradientBall.png'
import { PlanetsAndOrbits } from './HeroBackground'
import TagLine from './Tagline'

const Contact = () => {
	return (
		<Section crosses id={'contact'}>
			<div className="container relative z-2 pt-40 mb-40">
				<div className="flex relative justify-center scale-75">
					<img src={gradientBall} className="relative z-1" width={255} height={255} alt="Sphere" />
					<div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
						<PlanetsAndOrbits />
					</div>
				</div>
				<TagLine className="justify-center mt-10">Get in touch</TagLine>
			</div>
		</Section>
	)
}

export default Contact
