import Section from './Section'
import Button from './Button'
import javaLogo from '../assets/javaLogo.svg'

const Hero = () => {
	return (
		<Section className="pt-[12rem] -mt-[5rem]" crosses crossesOffset="lg:translate-y-[5rem]" customPaddings id="hero">
			<div className="container relative">
				<div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
					<div className="text-center flex justify-center items-center mb-[3rem] md:mb-20 lg:mb-[6rem]">
						<svg className="hidden md:block w-[4vw] h-auto mr-3 mb-3" width="5em" height="10em" viewBox="0 0 21 44">
							<path
								fill="none"
								stroke="url(#btn-left)"
								strokeWidth="2"
								d="M20,1 L14.972,1 L7.76,1 C3.474,1 0,4.419 0,8.636 L0,27.141 C0,29.407 1.022,31.556 2.791,33.007 L12.813,41.229 C14.208,42.373 15.966,43 17.783,43 L20,43"
							/>
						</svg>

						<h1 className="h1 mb-6 inline-block">
							Backend{' '}
							<span className="inline-flex items-center justify-center">
								<img src={javaLogo} alt="java logo" width={50} height={50} className="mr-2" />
								<span className="font-code text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#f7a137] via-[#cd1b27] to-[#c81f9e] transform translate-y-[10%]">
									Java
								</span>
							</span>{' '}
							Developer{' '}
							<span className="relative inline-block">
								Portfolio{' '}
								<svg className="absolute -top-[2.5em] -left-[.15em]" width="5em" height="10em" viewBox="0 0 100 44">
									<path
										fill="none"
										stroke="url(#btn-top)"
										strokeWidth="2"
										d="M-4 0C5 7 28-8 37 0 46 11 60-11 74 0 84 8 90-5 109 0"
									/>
								</svg>
							</span>
						</h1>

						<svg className="hidden md:block w-[4vw] h-auto ml-3 mb-3" width="5em" height="10em" viewBox="0 0 21 44">
							<path
								fill="none"
								stroke="url(#btn-right)"
								strokeWidth="2"
								d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
							/>
						</svg>
					</div>

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
