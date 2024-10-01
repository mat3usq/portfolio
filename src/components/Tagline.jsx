import React from 'react'

const brackets = position => (
	<svg
		width="5"
		height="14"
		viewBox="0 0 5 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="animate-gradient">
		<defs>
			<linearGradient id={`brackets-${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stopColor={position === 'left' ? '#89F9E8' : '#9099FC'}>
					<animate
						attributeName="stop-color"
						values={position === 'left' ? '#89F9E8;#FACB7B;#89F9E8' : '#9099FC;#D87CEE;#9099FC'}
						dur="4s"
						repeatCount="indefinite"
					/>
				</stop>
				<stop offset="100%" stopColor={position === 'left' ? '#FACB7B' : '#D87CEE'}>
					<animate
						attributeName="stop-color"
						values={position === 'left' ? '#FACB7B;#89F9E8;#FACB7B' : '#D87CEE;#9099FC;#D87CEE'}
						dur="4s"
						repeatCount="indefinite"
					/>
				</stop>
			</linearGradient>
		</defs>
		<path
			d={position === 'left' ? 'M5 0.822266H1V12.8223H5' : 'M0 0.822266H4V12.8223H0'}
			stroke={`url(#brackets-${position})`}
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

const TagLine = ({ className, children }) => {
	return (
		<div className={`tagline flex items-center ${className || ''}`}>
			{brackets('left')}
			<div className="mx-3 font-semibold text-n-2">{children}</div>
			{brackets('right')}
		</div>
	)
}

export default TagLine
