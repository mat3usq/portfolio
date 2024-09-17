import ButtonGradient from './assets/svgs/ButtonGradient'
import Header from './components/Header'
import StarsCanvas from './components/StarsBackground'

const App = () => {
	return (
		<>
			<div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
				<Header />
			</div>
			<StarsCanvas />
		</>
	)
}

export default App
