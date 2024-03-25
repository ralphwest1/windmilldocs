import React, { useEffect, useContext, useRef, useState } from 'react';
import ScrollContext from './ScrollContext';

export default function useAnimateScroll(
	active: boolean,
	steps: any[],
	maxQuantity: number,
	offset = 0,
	animationType: 'scroll' | 'time' = 'scroll'
) {
	const x = useContext(ScrollContext);
	const triggeredStepsRef = useRef([]);
	const lastScrollRef = useRef(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (!active) return;

		const handler = (latest) => {
			const latestAsNumber = latest - offset;
			setProgress(latestAsNumber);

			// Determine scroll direction
			const scrollingDown = latestAsNumber > lastScrollRef.current;

			// Update last scroll position
			lastScrollRef.current = latestAsNumber;

			if (scrollingDown) {
				// Handle scrolling down (trigger callbacks)
				steps.forEach((step, index) => {
					const stepScroll = (step.scroll * maxQuantity) / 100;
					if (latestAsNumber >= stepScroll && !triggeredStepsRef.current.includes(index)) {
						step.callback();
						triggeredStepsRef.current.push(index);
					}
				});
			} else {
				// Handle scrolling up (trigger rollbacks)
				for (let i = steps.length - 1; i >= 0; i--) {
					const step = steps[i];
					const stepScroll = (step.scroll * maxQuantity) / 100;

					if (latestAsNumber < stepScroll && triggeredStepsRef.current.includes(i)) {
						if (step.rollback) step.rollback();
						triggeredStepsRef.current = triggeredStepsRef.current.filter((index) => index !== i);
					}
				}
			}
		};

		x.onChange(handler);
	}, [active, steps, x, offset]); // Only re-run effect if these values change

	return { progress };
}

const scriptScrollCount = 2000;
const flowScrollCount = 2000;
const appScrollCount = 1000;

export { scriptScrollCount, flowScrollCount, appScrollCount };
