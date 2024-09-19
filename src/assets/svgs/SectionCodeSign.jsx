import CodeSvg from './CodeSvg'

const SectionCodeSign = ({ crossesOffset }) => {
	return (
		<>
			<CodeSvg
				className={`hidden absolute -top-[1.3rem] left-[.7rem] z-10 ${
					crossesOffset && crossesOffset
				} pointer-events-none lg:block xl:left-[1.3rem]`}
			/>

			<CodeSvg
				className={`hidden absolute -top-[1.4rem] right-[.7rem] z-10 ${
					crossesOffset && crossesOffset
				} pointer-events-none lg:block xl:right-[1.3rem]`}
			/>
		</>
	)
}

export default SectionCodeSign
