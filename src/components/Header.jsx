import portfolioLogo from '../assets/logos/portfolioLogo.svg'
import Button from './Button'
import StarsCanvas from './StarsBackground'

import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { navigation } from '../constants/constants'
import { HamburgerSvg } from '../assets/svgs/HamburgerSvg'
import { BackgroundMenu } from './HeaderBackground'

import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
	const path = useLocation()
	const [openNavigation, setOpenNavigation] = useState(false)

	const toggleNavigation = () => {
		if (openNavigation) {
			setOpenNavigation(false)
			enablePageScroll()
		} else {
			setOpenNavigation(true)
			disablePageScroll()
		}
	}

	const handleClick = () => {
		if (!openNavigation) return

		enablePageScroll()
		setOpenNavigation(false)
	}

	return (
		<div
			className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
				openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
			}`}>
			<div className="flex items-center px-5 lg:px-7.5x xl:px-10 max-lg:py4">
				<a className="flex items-center gap-4 w-[12rem] xl:mr-8 py-2" href="#aboutMe">
					<img src={portfolioLogo} alt="logo earth" width={60} height={60} />
					<span className="font-code text-2xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#89F9E8] via-[#D87CEE] to-[#9099FC]">
						Mat3usq
					</span>
				</a>

				<nav
					className={`${
						openNavigation ? 'flex' : 'hidden'
					} fixed top-[4.7rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
					<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
						{navigation.map(item => (
							<a
								key={item.id}
								href={item.url}
								onClick={handleClick}
								className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-2 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
									item.url === path.hash ? 'z-2 lg:text-color-1' : 'lg:text-n-1/50'
								} lg:leading-5 xl:px-12`}>
								{item.title}
							</a>
						))}
					</div>
					{openNavigation ? <StarsCanvas className="lg:hidden" /> : null}
					<BackgroundMenu />
				</nav>

				<Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
					<HamburgerSvg openNavigation={openNavigation} />
				</Button>
			</div>
		</div>
	)
}

export default Header
