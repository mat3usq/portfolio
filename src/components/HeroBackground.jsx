import { useEffect, useState } from 'react'
import { MouseParallax } from 'react-just-parallax'

import CodeSvg from '../assets/svgs/CodeSvg'

export const BackgroundScreens = () => {
	return (
		<>
			<div className="relative z-1 h-6 mx-4 bg-n-11 shadow-xl rounded-b-[.9rem] lg:h-6 lg:mx-8" />
			<div className="relative z-1 h-6 mx-8 bg-n-11/70 shadow-xl rounded-b-[.9rem] lg:h-6 lg:mx-20" />
		</>
	)
}

export const BottomLine = () => {
	return (
		<>
			<div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

			<CodeSvg className="hidden absolute top-[54rem] left-[1.25rem] pointer-events-none xl:block" />

			<CodeSvg className="hidden absolute top-[53.8rem] right-[1.25rem] pointer-events-none xl:block" />
		</>
	)
}

const Orbits = () => {
	return (
		<>
			<div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
		</>
	)
}

export const PlanetsAndOrbits = ({ parallaxRef }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const planets = [
		{ size: 'w-2 h-2', color: 'from-[#DD734F] to-[#1A1A32]', rotate: 'rotate-[46deg]', offset: 'ml-[2rem] mt-[8rem]' },
		{
			size: 'w-4 h-4',
			color: 'from-[#DD734F] to-[#1A1A32]',
			rotate: '-rotate-[56deg]',
			offset: 'ml-[10rem] mt-[7rem]',
		},
		{ size: 'w-4 h-4', color: 'from-[#B9AEDF] to-[#1A1A32]', rotate: 'rotate-[54deg]', offset: 'ml-[5rem] mt-[12rem]' },
		{
			size: 'w-3 h-3',
			color: 'from-[#B9AEDF] to-[#1A1A32]',
			rotate: '-rotate-[65deg]',
			offset: 'ml-[12rem] mt-[10rem]',
		},
		{
			size: 'w-6 h-6',
			color: 'from-[#88E5BE] to-[#1A1A32]',
			rotate: '-rotate-[85deg]',
			offset: 'ml-[8rem] mt-[15rem]',
		},
		{ size: 'w-6 h-6', color: 'from-[#88E5BE] to-[#1A1A32]', rotate: 'rotate-[70deg]', offset: 'ml-[15rem] mt-[5rem]' },
		{
			size: 'w-5 h-5',
			color: 'from-[#FFC857] to-[#2A2D34]',
			rotate: 'rotate-[30deg]',
			offset: 'ml-[18rem] mt-[14rem]',
		},
		{
			size: 'w-3 h-3',
			color: 'from-[#C08497] to-[#6A0572]',
			rotate: '-rotate-[40deg]',
			offset: 'ml-[4rem] mt-[12rem]',
		},
		{ size: 'w-4 h-4', color: 'from-[#06AED5] to-[#086972]', rotate: 'rotate-[75deg]', offset: 'ml-[14rem] mt-[9rem]' },
		{
			size: 'w-8 h-8',
			color: 'from-[#FF6978] to-[#A4031F]',
			rotate: '-rotate-[100deg]',
			offset: 'ml-[7rem] mt-[4rem]',
		},
		{
			size: 'w-2 h-2',
			color: 'from-[#F9ED69] to-[#A79F68]',
			rotate: '-rotate-[20deg]',
			offset: 'ml-[10rem] mt-[20rem]',
		},
		{ size: 'w-5 h-5', color: 'from-[#00F5D4] to-[#006E6D]', rotate: 'rotate-[95deg]', offset: 'ml-[6rem] mt-[18rem]' },
		{
			size: 'w-7 h-7',
			color: 'from-[#F76C6C] to-[#1F1A38]',
			rotate: '-rotate-[110deg]',
			offset: 'ml-[16rem] mt-[6rem]',
			animate: 'animate-pulse',
		},
		{
			size: 'w-4 h-4',
			color: 'from-[#3A86FF] to-[#1A1A32]',
			rotate: 'rotate-[50deg]',
			offset: 'ml-[3rem] mt-[15rem]',
			animate: 'animate-spin-slow',
		},
		{
			size: 'w-9 h-9',
			color: 'from-[#FFBE0B] to-[#3A0866]',
			rotate: '-rotate-[150deg]',
			offset: 'ml-[20rem] mt-[8rem]',
			animate: 'animate-bounce',
		},
		{
			size: 'w-3 h-3',
			color: 'from-[#9D4EDD] to-[#440A67]',
			rotate: 'rotate-[180deg]',
			offset: 'ml-[12rem] mt-[16rem]',
		},
	]

	return (
		<div className="absolute -top-[12rem] left-1/2 w-[20rem] sm:w-[30rem] sm:-top-[18rem] md:w-[50rem] md:-top-[30rem] lg:-top-[37.5rem] lg:w-[75rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2">
			<Orbits />

			<MouseParallax strength={0.05} parallaxContainerRef={parallaxRef}>
				{planets.map((planet, index) => (
					<div key={index} className={`absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom ${planet.rotate}`}>
						<div
							className={`${planet.size} ${planet.offset} bg-gradient-to-b ${
								planet.color
							} rounded-full transition-transform duration-500 ease-out ${
								mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							} ${planet.hidden || ''} ${planet.animate || ''}`}
						/>
					</div>
				))}
			</MouseParallax>
		</div>
	)
}
