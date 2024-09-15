import portfolioLogo from '../assets/portfolioLogo.svg'

const Header = () => {
	return (
		<div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
			<div className="flex items-center px-5 lg:px-7.5x xl:px-10 max-lg:py4">
				<a className="flex items-center gap-4 w-[12rem] xl:mr-8 mt-1" href="#hero">
					<img src={portfolioLogo} alt="logo earth" width={60} height={60} />
					<span className="text-2xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#89F9E8] via-[#D87CEE] to-[#9099FC]">
						Mat3usq
					</span>
				</a>

				<nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
					<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"></div>
				</nav>
			</div>
		</div>
	)
}

export default Header
