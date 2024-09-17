const CodeSvg = ({ className = '' }) => {
	return (
		<svg className={`${className} || ""`} width="11" height="11" fill="none">
			<path d="M9 15l-4-1 6-4M14 16l6-4-5-2M11 17l3-9" fill="#8c86ac" />
		</svg>
	)
}

export default CodeSvg
