import coding from '../assets/coding.svg'
import { notificationsImages } from '../constants/constants'

const Notification = ({ className, title }) => {
	return (
		<div
			className={`${
				className || ''
			} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
			<img src={coding} width={55} height={55} alt="image" className="rounded-xl" />

			<div className="flex-1">
				<h6 className="mb-1 font-semibold text-base">{title}</h6>

				<div className="flex items-center justify-between">
					<ul className="flex -m-0.5 gap-2">
						{notificationsImages.map((icon, index) => (
							<li key={index} className="flex w-6 h-6 rounded-full overflow-hidden">
								<img src={icon.source} className="w-full" width={icon.width} height={icon.height} alt={icon.title} />
							</li>
						))}
					</ul>
					<div className="body-2 text-n-13">1m ago</div>
				</div>
			</div>
		</div>
	)
}

export default Notification
