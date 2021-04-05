import React, { useEffect, useState } from 'react'

const Timer = ({ end }) => {
	const [time, setTime] = useState()

	useEffect(function () {
		const timer = setInterval(function () {
			const now = new Date().getTime()
			const distance = end - now

			const days = Math.floor(distance / (1000 * 60 * 60 * 24))
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			)
			const seconds = Math.floor((distance % (1000 * 60)) / 1000)

			if (distance <= 0) {
				clearInterval(timer)
				setTime('Sale Has Expired')
			}

			setTime(
				days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '
			)
		}, 1000)
	})

	return (
		<div className="container py-4 timer">
			<h2 className="text-center text-uppercase">
				Massive iPhone Sale Ends
			</h2>
			<div className="text-center countdown-timer">{time}</div>
		</div>
	)
}

export default Timer
