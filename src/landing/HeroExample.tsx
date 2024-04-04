import React, { useEffect, useState } from 'react';
import LandingSection from './LandingSection';
import { Code, FastForward, LayoutDashboard, List, Play, PlayCircle } from 'lucide-react';
import { VolumeX } from 'lucide-react';

const tabs = [
	{
		label: 'Scripts',
		icon: Code,
		id: 'scripts',
		data: []
	},
	{
		label: 'Flows',
		icon: List,
		id: 'flows',
		data: []
	},
	{
		label: 'Apps',
		icon: LayoutDashboard,
		id: 'apps',
		data: []
	}
];

export default function HeroExample() {
	const [hookProps] = useState({
		tabs: tabs,
		initialTabId: tabs[0].id
	});
	const [played, setPlayed] = useState(false);

	// When played toggles to true, start the video
	useEffect(() => {
		const video = document.getElementById('main-video') as HTMLVideoElement;
		if (played) {
			video.play();
		}
	}, [played]);

	return (
		<div className="relative">
			<LandingSection bgClass="">
				<div className="w-full gap-8 flex flex-col">
					<h1 className="tracking-tight leading-tight text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-500 to-slate-800 dark:from-slate-100 dark:to-slate-500 ">
						Give your scripts Superpowers
					</h1>
					<p className="max-w-5xl text-lg">
						Make your scripts production grade and build all of your internal tools with Python,
						Typescript, Go, Bash, Sql. <br /> Compose your scripts as workflows using low-code.{' '}
						<br />
						Share an autogenerated UI or build one using low-code. Run it reliably at scale on your
						infra or ours, with permissioning and monitoring included. Fully open-source and easy to
						deploy on small and large infra. Any dependency with zero-config.
					</p>
					<div className="video-container">
						<iframe
							src="https://www.youtube.com/embed/IOvzHJ2BHl8"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen={true}
							className="rounded-xl"
						></iframe>
					</div>
				</div>
			</LandingSection>
			<div className="absolute top-0 right-0 transform translate-y-1/2 h-full ">
				<div className="w-48 rounded-l-md p-4 z-50 bg-white shadow-lg border-gray-100 flex flex-col gap-2">
					<div className="flex flex-row gap-1 items-center jus">
						<FastForward size={20} className="text-blue-500" />
						<div className="text-sm font-medium text-gray-900 ">{"Don't have time?"}</div>
					</div>
					<div className="text-xs text-gray-900 ">{'Check out our 2 min tour!'}</div>
					<a
						href="https://www.youtube.com/watch?v=IOvzHJ2BHl8"
						target="_blank"
						rel="noreferrer"
						className="text-xs font-medium !text-white bg-blue-500 !no-underline flex flex-row gap-1 items-center rounded-md justify-center py-1.5 hover:bg-opacity-80 transition-all"
					>
						<Play size={16} className="text-white" />
						{'Watch Now'}
					</a>
				</div>
			</div>
		</div>
	);
}
