import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { FastAverageColor } from 'fast-average-color'

const Ball = props => {
	const [decal] = useTexture([props.imgUrl])
	const [dominantColor, setDominantColor] = useState('#ffffff')

	useEffect(() => {
		const img = new Image()
		img.crossOrigin = 'Anonymous'
		img.src = props.imgUrl
		img.onload = () => {
			const fac = new FastAverageColor()
			fac
				.getColorAsync(img)
				.then(color => {
					const darkenedColor = darkenColor(color.hex, -0.2)
					setDominantColor(darkenedColor)
					fac.destroy()
				})
				.catch(e => {
					console.error(e)
				})
		}
	}, [props.imgUrl])

	return (
		<Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.5}>
				<icosahedronGeometry args={[1, 3]} />
				<meshStandardMaterial color={dominantColor} polygonOffset polygonOffsetFactor={-1} flatShading />
				<Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
			</mesh>
		</Float>
	)
}

function darkenColor(hexColor, amount) {
	let color = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor

	if (color.length === 3) {
		color = color
			.split('')
			.map(c => c + c)
			.join('')
	}

	let num = parseInt(color, 16)
	let r = (num >> 16) & 255
	let g = (num >> 8) & 255
	let b = num & 255

	r = Math.floor(r * (1 - amount))
	g = Math.floor(g * (1 - amount))
	b = Math.floor(b * (1 - amount))

	r = Math.max(0, Math.min(255, r))
	g = Math.max(0, Math.min(255, g))
	b = Math.max(0, Math.min(255, b))

	let newColor = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
	return newColor
}

const BallCanvas = ({ icon }) => {
	return (
		<Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={null}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default BallCanvas
