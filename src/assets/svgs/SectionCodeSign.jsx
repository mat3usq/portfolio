import CodeSvg from './CodeSvg'

const SectionCodeSign = ({ crossesOffset }) => {
	return (
		<>
			<CodeSvg
				className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
					crossesOffset && crossesOffset
				} pointer-events-none lg:block xl:left-[2.1875rem]`}
			/>

			<CodeSvg
				className={`hidden absolute -top-[0.3125rem] right-[1.5625rem] ${
					crossesOffset && crossesOffset
				} pointer-events-none lg:block xl:right-[2.1875rem]`}
			/>
		</>
	)
}

export default SectionCodeSign
