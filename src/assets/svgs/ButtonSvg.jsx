const ButtonSvg = white => (
	<>
		<svg className="absolute top-0 left-0" width="24" height="44" viewBox="0 0 21 44">
			<path
				fill={white ? 'white' : 'none'}
				stroke={white ? 'white' : 'url(#btn-left)'}
				strokeWidth="2"
				d="M20,1 L14.972,1 L7.76,1 C3.474,1 0,4.419 0,8.636 L0,27.141 C0,29.407 1.022,31.556 2.791,33.007 L12.813,41.229 C14.208,42.373 15.966,43 17.783,43 L20,43"
			/>
		</svg>
		<svg
			className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
			height="44"
			viewBox="0 0 100 44"
			preserveAspectRatio="none"
			fill={white ? 'white' : 'none'}>
			{white ? (
				<polygon fill="white" fillRule="nonzero" points="100 0 100 44 0 44 0 0" />
			) : (
				<>
					<polygon fill="url(#btn-top)" fillRule="nonzero" points="100 42 100 44 0 44 0 42" />
					<polygon fill="url(#btn-bottom)" fillRule="nonzero" points="100 0 100 2 0 2 0 0" />
				</>
			)}
		</svg>
		<svg className="absolute top-0 right-0" width="24" height="44" viewBox="0 0 21 44">
			<path
				fill={white ? 'white' : 'none'}
				stroke={white ? 'white' : 'url(#btn-right)'}
				strokeWidth="2"
				d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
			/>
		</svg>
	</>
)

export default ButtonSvg
