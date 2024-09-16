import portfolioLogo from '../assets/portfolioLogo.svg'
import { useLocation } from 'react-router-dom'
import { navigation } from '../constants/constants'

const Header = () => {
	const path = useLocation()

	return (
		<div className="fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
			<div className="flex items-center px-5 lg:px-7.5x xl:px-10 max-lg:py4">
				<a className="flex items-center gap-4 w-[12rem] xl:mr-8 py-2" href="#hero">
					<img src={portfolioLogo} alt="logo earth" width={60} height={60} />
					<span className="font-code text-2xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#89F9E8] via-[#D87CEE] to-[#9099FC]">
						Mat3usq
					</span>
				</a>

				<nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
					<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
						{navigation.map(item => (
							<a
								key={item.id}
								href={item.url}
								className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-2 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
									item.url === path.hash ? 'z-2 lg:text-color-1' : 'lg:text-n-1/50'
								} lg:leading-5 xl:px-12`}>
								{item.title}
							</a>
						))}
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Header
