import ButtonGradient from './assets/svgs/ButtonGradient'
import Contact from './components/Contact'
import Exprojects from './components/Exprojects'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import StarsCanvas from './components/StarsBackground'

const App = () => {
	return (
		<>
			<div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
				<Header />
				<Hero />
				<Skills />
				<Exprojects />
				<Contact />
			</div>
			<StarsCanvas />
			<ButtonGradient />
		</>
	)
}

export default App
