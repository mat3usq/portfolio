import SectionCodeSign from '../assets/svgs/SectionCodeSign'

const Section = ({ className, id, crosses, crossesOffset, customPaddings, children, photo }) => {
	return (
		<div
			id={id}
			className={`
      relative 
      ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''}`} 
      ${className || ''}`}
			style={{
				backgroundImage: photo ? `url(${photo})` : 'none', 
				backgroundSize: 'cover', 
				backgroundPosition: 'center', 
				backgroundRepeat: 'no-repeat' 
			}}>
			
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black opacity-80 z-0 pointer-events-none" />

			{/* Content */}
			<div className="relative z-10">
				{children}
			</div>

			{/* Stroke lines */}
			<div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
			<div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

			{/* Crosses */}
			{crosses && (
				<>
					<div
						className={`hidden absolute top-0 left-7 right-7 h-0.25 bg-stroke-1 ${
							crossesOffset && crossesOffset
						} pointer-events-none lg:block xl:left-10 right-9 z-10`}
					/>
					<SectionCodeSign crossesOffset={crossesOffset} />
				</>
			)}
		</div>
	)
}

export default Section
