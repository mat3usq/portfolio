import BallCanvas from './Ball'
import { technologiesIcons } from '../constants/constants'

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10 w-[100%] lg:w-[70%] mx-auto">
			{technologiesIcons.map(technology => (
				<div className="w-28 h-28" key={technology.title}>
					<BallCanvas icon={technology.source} />
				</div>
			))}
		</div>
	)
}

export default Tech
