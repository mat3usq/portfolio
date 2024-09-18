export const HamburgerSvg = ({ openNavigation }) => {
	return (
		<svg
			className={`overflow-visible transition-transform duration-500 ease-in-out ${
				openNavigation ? 'scale-x-[-1]' : 'hover:scale-110'
			}`}
			width="24"
			height="18"
			viewBox="0 0 24 18">
			<rect
				className={`transition-all duration-500 ease-in-out origin-center ${openNavigation ? 'rotate-45' : ''}`}
				y="0"
				width="24"
				height="2"
				rx="1"
				fill="white"
				transform-origin="center"
				style={{
					transform: openNavigation ? 'translateY(8px) rotate(45deg) scale(1.1)' : 'translateY(0px)',
				}}
			/>
			<rect
				className={`transition-all duration-500 ease-in-out origin-center ${openNavigation ? '-rotate-45' : ''}`}
				y="16"
				width="24"
				height="2"
				rx="1"
				fill="white"
				transform-origin="center"
				style={{
					transform: openNavigation ? 'translateY(-8px) rotate(-45deg) scale(1.2)' : 'translateY(0px)',
				}}
			/>
		</svg>
	)
}
