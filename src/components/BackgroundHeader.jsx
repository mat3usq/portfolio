import galaxy from '../assets/galaxy.jpeg'

export const Orbits = () => {
	return (
		<div className="absolute top-1/2 left-1/2 w-[53rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
			<div className="absolute top-1/2 left-1/2 w-[37rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
			<div className="absolute top-1/2 left-1/2 w-[24rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
			<div className="absolute top-1/2 left-1/2 w-[16rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
			<div className="absolute top-1/2 left-1/2 w-[7rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
		</div>
	)
}

export const SideLines = () => {
	return (
		<>
			<div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
			<div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
		</>
	)
}

export const Planets = () => {
	return (
		<>
			<div className="absolute top-[2.4rem] left-[3rem] w-4 h-4 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full">
				<div className="absolute w-12 h-12 bg-gradient-radial from-[#DD734F]/30 to-transparent rounded-full -top-4 -left-4"></div>
			</div>

			<div className="absolute top-[8rem] right-[6rem] w-5 h-5 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full">
				<div className="absolute w-14 h-14 bg-gradient-radial from-[#B9AEDF]/40 to-transparent rounded-full -top-5 -right-5"></div>
			</div>

			<div className="absolute top-[12rem] left-[10rem] w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full">
				<div className="absolute w-16 h-16 bg-gradient-radial from-[#88E5BE]/30 to-transparent rounded-full -top-5 -left-5"></div>
			</div>

			<div className="absolute top-[16rem] right-[14rem] w-10 h-10 bg-gradient-to-b from-[#FFDE59] to-[#1A1A32] rounded-full">
				<div className="absolute w-20 h-20 bg-gradient-radial from-[#FFDE59]/50 to-transparent rounded-full -top-7 -right-7"></div>
			</div>

			<div className="absolute top-[25rem] left-[5rem] w-12 h-12 bg-gradient-to-b from-[#58A4FF] to-[#1A1A32] rounded-full">
				<div className="absolute w-24 h-24 bg-gradient-radial from-[#58A4FF]/40 to-transparent rounded-full -top-6 -left-6"></div>
			</div>

			<div className="absolute top-[35rem] right-[15rem] w-10 h-10 bg-gradient-to-b from-[#34eb4f] to-[#1A1A32] rounded-full">
				<div className="absolute w-16 h-16 border-[2px] border-[#34eb4f]/40 rounded-full -top-3 -left-3 transform perspective-[200px] rotateX-[75deg]"></div>
				<div className="absolute w-24 h-24 border-[2px] border-[#34eb4f]/20 rounded-full -top-6 -left-6 transform perspective-[200px] rotateX-[75deg]"></div>
			</div>

			<div className="absolute top-[42rem] left-[3rem] w-6 h-6 bg-gradient-to-b from-[#F78DA7] to-[#1A1A32] rounded-full">
				<div className="absolute w-14 h-14 bg-gradient-radial from-[#F78DA7]/40 to-transparent rounded-full -top-4 -left-4"></div>
			</div>

			<div className="absolute top-[48rem] right-[8rem] w-8 h-8 bg-gradient-to-b from-[#FF6F61] to-[#1A1A32] rounded-full">
				<div className="absolute w-20 h-20 bg-gradient-radial from-[#FF6F61]/50 to-transparent rounded-full -top-5 -right-5"></div>
			</div>
		</>
	)
}

export const HamburgerMenu = () => {
	return (
		<div className="absolute inset-0 pointer-events-none lg:hidden">
			<div className="absolute inset-0 opacity-[.15]">
				<img className="w-full h-full object-cover" src={galaxy} alt="galaxy background" />
			</div>

			<Orbits />

			<SideLines />

			<Planets />
		</div>
	)
}
