import React, { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import Lottie from 'react-lottie'
import animationData from '../assets/confetti.json'

const MagicButton = ({ title, icon, position, handleClick }) => {
	return (
		<button
			className="relative inline-flex h-12 w-[13rem] overflow-hidden rounded-lg p-[1px] focus:outline-none"
			onClick={handleClick}>
			<span
				className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
				style={{
					background:
						'conic-gradient(from 90deg at 50% 50%, rgb(18,113,255) 0%, rgb(221,74,255) 25%, rgb(100,220,255) 50%, rgb(200,50,50) 75%, rgb(180,180,50) 100%)',
				}}
			/>

			<span
				className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
				{position === 'left' && icon}
				{title}
				{position === 'right' && icon}
			</span>
		</button>
	)
}

const EmailBox = () => {
	const [copied, setCopied] = useState(false)

	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	const handleCopy = () => {
		const email = 'mmogielnicki123@gmail.com'
		navigator.clipboard.writeText(email)
		setCopied(true)
		setTimeout(() => setCopied(false), 4000)
	}

	return (
		<div className="relative flex flex-col items-center mt-10">
			{copied && (
				<div className="absolute -top-20">
					<Lottie options={{ ...defaultOptions, autoplay: true }} height={200} width={200} />
				</div>
			)}
			<MagicButton
				title={copied ? 'Email copied!' : 'Copy my email'}
				icon={<IoCopyOutline />}
				position="left"
				handleClick={handleCopy}
			/>
		</div>
	)
}

export default EmailBox
