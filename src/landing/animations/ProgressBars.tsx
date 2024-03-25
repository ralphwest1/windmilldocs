import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollContext from './ScrollContext';
import { appScrollCount, flowScrollCount, scriptScrollCount } from './useAnimateScroll';

const ProgressBar = ({
	percents,
	active,
	onClick,
	onComplete,
	title,
	easing = 'easeInOut', // Default easing
	barWidth = 'full', // Using Tailwind's "full" to denote 100% width
	barHeight = '2', // Corresponds to h-6 in Tailwind, adjust as necessary
	progressColor = 'bg-blue-600', // Tailwind class for progress bar color
	baseColor = 'dark:bg-gray-800 bg-gray-100' // Tailwind class for the base bar color,
}) => {
	const transition = {
		ease: easing
	};

	const variants = {
		enter: { width: 0 },
		animate: {
			width: percents + '%', // Animate width based on percents prop
			transition,
			duration: 2
		}
	};

	return (
		<div className="flex flex-col gap-1">
			<div className="text-sm">{title}</div>
			<div
				className={`w-${barWidth} h-${barHeight} ${baseColor} relative rounded-lg overflow-hidden cursor-pointer hover:opacity-50 transition-all h-2`}
				onClick={onClick}
			>
				<motion.div
					className={`absolute top-0 left-0 h-${barHeight} ${progressColor} rounded-lg`}
					variants={variants}
					initial="enter"
					animate={active ? 'animate' : 'enter'}
					onAnimationComplete={() => {
						if (active && onComplete) {
							onComplete();
						}
					}}
				></motion.div>
			</div>
		</div>
	);
};
export default function ProgressBars({ setStep }) {
	const x = useContext(ScrollContext);

	const [progress, setProgress] = React.useState(0);

	useEffect(
		() =>
			x.onChange((latest) => {
				const latestAsNumber = latest;
				setProgress(latestAsNumber);

				let newStep = 0;
				if (latestAsNumber < scriptScrollCount) {
					newStep = 0;
				} else if (
					latestAsNumber >= scriptScrollCount &&
					latestAsNumber < scriptScrollCount + flowScrollCount
				) {
					newStep = 1;
				} else if (latestAsNumber >= scriptScrollCount + flowScrollCount) {
					newStep = 2;
				}

				setStep(newStep);
			}),
		[]
	);

	return (
		<div className="grid grid-cols-3 gap-4 w-full  my-4">
			<ProgressBar
				percents={Math.round((progress * 100) / scriptScrollCount)}
				active={true}
				onClick={() => {
					//setStep(0)
				}}
				onComplete={() => {
					//setStep(1);
				}}
				title={'Scripts'}
				progressColor="dark:bg-blue-600 bg-blue-400"
			/>
			<ProgressBar
				percents={Math.round(((progress - scriptScrollCount) * 100) / flowScrollCount)}
				active={progress > scriptScrollCount}
				onClick={() => {
					//setStep(0)
				}}
				onComplete={() => {
					//setStep(1)
				}}
				progressColor="dark:bg-green-600 bg-green-400"
				title={'Flows'}
			/>
			<ProgressBar
				percents={Math.round(
					((progress - scriptScrollCount - flowScrollCount) * 100) / appScrollCount
				)}
				active={progress > scriptScrollCount + flowScrollCount}
				onClick={() => {
					//setStep(0)
				}}
				onComplete={() => {
					//setStep(1)
				}}
				progressColor="dark:bg-orange-600 bg-orange-400"
				title={'Apps'}
			/>
		</div>
	);
}
