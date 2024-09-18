import Section from './Section'
import Button from './Button'

const Hero = () => {
	return (
		<Section className="pt-[12rem] -mt-[5rem]" crosses crossesOffset="lg:translate-y-[5rem]" customPaddings id="hero">
			<div className="container relative">
				<div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
					<h1 className="h1 mb-6">
						Backend Java Developer {` `}
						{/* <span className="inline-block relative">
                            Portfolio {` `}
							<img
								src={protfolioImage}
								className="absolute top-full left-0 w-full xl:-mt-2"
								width={624}
								height={28}
								alt="protfolioImage"
							/>
						</span> */}
					</h1>
					<p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
						As a Programmer, I specialize in crafting secure, scalable, and efficient systems. My experience spans
						across website, and software development, ensuring seamless integration from the backend to the user
						interface. With a solid understanding of frontend technologies, I create cohesive and high-performing
						solutions that elevate the entire user experience.
					</p>
					<Button href="#projects" white>
						Find out more!
					</Button>
				</div>
			</div>
		</Section>
	)
}

export default Hero
