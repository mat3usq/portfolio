import React from 'react'

export const RightCurve = () => {
	return (
		<div className="absolute top-1/2 left-full ml-10 pointer-events-none">
			<svg width="162" height="76" viewBox="0 0 162 76" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.333333 3C0.333333 1.52724 1.52724 0.333336 3 0.333336C4.47276 0.333336 5.66667 1.52724 5.66667 3C5.66667 4.47276 4.47276 5.66666 3 5.66666C1.52724 5.66666 0.333333 4.47276 0.333333 3ZM157 72.5L162 70.1132V75.8868L157 73.5V72.5ZM84.5606 38C84.5606 36.5272 85.7545 35.3333 87.2272 35.3333C88.7 35.3333 89.8939 36.5272 89.8939 38C89.8939 39.4728 88.7 40.6667 87.2272 40.6667C85.7545 40.6667 84.5606 39.4728 84.5606 38ZM3 2.5H52.2273V3.5H3V2.5ZM122.227 72.5H157.5V73.5H122.227V72.5ZM87.7272 38C87.7272 57.0538 103.173 72.5 122.227 72.5V73.5C102.621 73.5 86.7272 57.6061 86.7272 38H87.7272ZM52.2273 2.5C71.8334 2.5 87.7272 18.3939 87.7272 38H86.7272C86.7272 18.9462 71.2811 3.5 52.2273 3.5V2.5Z"
					fill="#252134"
				/>
			</svg>
		</div>
	)
}

export const LeftCurve = () => {
	return (
		<div className=" absolute top-1/2 right-full mr-10 pointer-events-none">
			<svg width="522" height="182" viewBox="0 0 522 182" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.333333 179C0.333333 180.473 1.52724 181.667 3 181.667C4.47276 181.667 5.66667 180.473 5.66667 179C5.66667 177.527 4.47276 176.333 3 176.333C1.52724 176.333 0.333333 177.527 0.333333 179ZM517 3.5L522 5.88675V0.113249L517 2.5V3.5ZM3 179.5H131.782V178.5H3V179.5ZM212.282 99V83H211.282V99H212.282ZM291.782 3.5H517.5V2.5H291.782V3.5ZM212.282 83C212.282 39.0934 247.875 3.5 291.782 3.5V2.5C247.323 2.5 211.282 38.5411 211.282 83H212.282ZM131.782 179.5C176.241 179.5 212.282 143.459 212.282 99H211.282C211.282 142.907 175.688 178.5 131.782 178.5V179.5Z"
					fill="#252134"
				/>
			</svg>
		</div>
	)
}

export const TopCurve = () => {
	return (
		<>
			<svg
				className="absolute -top-[25rem] left-1/4 pointer-events-none transform -translate-x-1/2 rotate-90"
				width="522"
				height="182"
				viewBox="0 0 522 182"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.333333 179C0.333333 180.473 1.52724 181.667 3 181.667C4.47276 181.667 5.66667 180.473 5.66667 179C5.66667 177.527 4.47276 176.333 3 176.333C1.52724 176.333 0.333333 177.527 0.333333 179ZM517 3.5L522 5.88675V0.113249L517 2.5V3.5ZM3 179.5H131.782V178.5H3V179.5ZM212.282 99V83H211.282V99H212.282ZM291.782 3.5H517.5V2.5H291.782V3.5ZM212.282 83C212.282 39.0934 247.875 3.5 291.782 3.5V2.5C247.323 2.5 211.282 38.5411 211.282 83H212.282ZM131.782 179.5C176.241 179.5 212.282 143.459 212.282 99H211.282C211.282 142.907 175.688 178.5 131.782 178.5V179.5Z"
					fill="#252134"
				/>
			</svg>

			<svg
				className="absolute -top-[25rem] left-3/4 transform -translate-x-1/2 rotate-90 scale-x-[-1]"
				width="522"
				height="182"
				viewBox="0 0 522 182"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.333333 179C0.333333 180.473 1.52724 181.667 3 181.667C4.47276 181.667 5.66667 180.473 5.66667 179C5.66667 177.527 4.47276 176.333 3 176.333C1.52724 176.333 0.333333 177.527 0.333333 179ZM517 3.5L522 5.88675V0.113249L517 2.5V3.5ZM3 179.5H131.782V178.5H3V179.5ZM212.282 99V83H211.282V99H212.282ZM291.782 3.5H517.5V2.5H291.782V3.5ZM212.282 83C212.282 39.0934 247.875 3.5 291.782 3.5V2.5C247.323 2.5 211.282 38.5411 211.282 83H212.282ZM131.782 179.5C176.241 179.5 212.282 143.459 212.282 99H211.282C211.282 142.907 175.688 178.5 131.782 178.5V179.5Z"
					fill="#252134"
				/>
			</svg>
		</>
	)
}

export const BottomCurve = () => {
	return (
		<>
			<div className="hidden xl:block">
				<svg
					className="absolute -bottom-[18rem] left-[3rem] transform -translate-x-1/2"
					width="400"
					height="310"
					viewBox="0 0 400 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<circle cx="3" cy="300" r="3" fill="#252134" />
					<path
						d="M3 300 C100 300, 150 150, 200 0"
						stroke="#252134"
						strokeWidth="1"
						fill="none"
						markerEnd="url(#small-arrowhead-left)"
					/>
					<defs>
						<marker id="small-arrowhead-left" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
							<polygon points="0 0, 6 2, 0 4" fill="#252134" />
						</marker>
					</defs>
				</svg>

				<svg
					className="absolute -bottom-[19.5rem] left-1/2 transform -translate-x-1/2"
					width="200"
					height="320"
					viewBox="0 0 200 320"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<circle cx="100" cy="300" r="3" fill="#252134" />
					<path
						d="M100 300 L100 50"
						stroke="#252134"
						strokeWidth="1"
						fill="none"
						markerEnd="url(#small-arrowhead-center)"
					/>
					<defs>
						<marker id="small-arrowhead-center" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
							<polygon points="0 0, 6 2, 0 4" fill="#252134" />
						</marker>
					</defs>
				</svg>

				<svg
					className="absolute -bottom-[18rem] left-[19rem] transform -translate-x-1/2"
					width="400"
					height="310"
					viewBox="0 0 400 300"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<circle cx="397" cy="300" r="3" fill="#252134" />
					<path
						d="M397 300 C300 300, 250 150, 200 0"
						stroke="#252134"
						strokeWidth="1"
						fill="none"
						markerEnd="url(#small-arrowhead-right)"
					/>
					<defs>
						<marker id="small-arrowhead-right" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
							<polygon points="0 0, 6 2, 0 4" fill="#252134" />
						</marker>
					</defs>
				</svg>
			</div>
		</>
	)
}
