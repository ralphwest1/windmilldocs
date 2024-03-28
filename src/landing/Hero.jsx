import React from 'react';
import GithubStarCount from './GithubStarCount';
import RadialBlur from './RadialBlur';
import HomescreenSvg from '../../static/homescreen.svg';
import Link from '@docusaurus/Link';

export default function Hero() {
	return (
		<div className="relative rounded-none mx-auto max-w-screen-2xl overflow-hidden 2xl:rounded-3xl pt-32">
			<RadialBlur />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-2  max-w-7xl px-8 mx-auto py-16 ">
				<div>
					<div className="flex flex-row items-end gap-8">
						<GithubStarCount />
					</div>
					<h1 className="mt-4 !text-4xl !tracking-tight !font-bold sm:!text-6xl">
						Open-source developer platform and workflow engine
					</h1>
					<div className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-100">
						Turn scripts into auto-generated UIs, APIs and cron jobs. <br /> Compose them as
						workflows or data pipelines. <br />
						Build complex, data-intensive apps with ease.
						<br /> <br />
						Write and deploy software 10x faster, and run it with the highest reliability and
						observabilty on the{' '}
						<a className="underline" href="/docs/misc/benchmarks/competitors">
							fastest self-hostable job orchestrator
						</a>
						.
					</div>
					<div className="mt-10 flex items-center gap-x-6">
						<a
							href="https://app.windmill.dev/user/login"
							onClick={() => window.plausible('try-cloud')}
							data-analytics='"try-cloud"'
							className="rounded-md transition-all bg-blue-500 px-4 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 !no-underline"
							rel="nofollow"
						>
							Try Windmill Cloud
						</a>

						<Link
							href="docs/advanced/self_host"
							onClick={() => window.plausible?.('self-host')}
							className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 text !no-underline"
						>
							Self-host in 3 mins <span aria-hidden="true">→</span>
						</Link>
					</div>
					<div className="w-full font-medium text-slate-400 text-left mt-16 flex-container">
						Backed by
						<a
							href="https://www.ycombinator.com/companies/windmill"
							target="_blank"
							title="Y-Combinator"
						>
							<svg
								className="logo"
								width="137"
								height="32"
								viewBox="0 0 137 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="137" height="32" />
								<path
									d="M51.672 19.94C51.348 20.48 51.006 20.954 50.646 21.362C50.286 21.77 49.884 22.118 49.44 22.406C49.008 22.682 48.522 22.892 47.982 23.036C47.454 23.18 46.848 23.252 46.164 23.252C45.264 23.252 44.43 23.09 43.662 22.766C42.906 22.442 42.246 21.992 41.682 21.416C41.13 20.84 40.698 20.15 40.386 19.346C40.074 18.542 39.918 17.66 39.918 16.7C39.918 15.74 40.08 14.858 40.404 14.054C40.74 13.25 41.196 12.56 41.772 11.984C42.348 11.408 43.02 10.958 43.788 10.634C44.556 10.31 45.378 10.148 46.254 10.148C46.902 10.148 47.502 10.232 48.054 10.4C48.618 10.556 49.128 10.778 49.584 11.066C50.04 11.354 50.442 11.696 50.79 12.092C51.138 12.488 51.42 12.926 51.636 13.406L50.088 14.522C49.632 13.646 49.086 12.992 48.45 12.56C47.826 12.128 47.082 11.912 46.218 11.912C45.618 11.912 45.054 12.032 44.526 12.272C44.01 12.512 43.554 12.848 43.158 13.28C42.774 13.7 42.468 14.204 42.24 14.792C42.012 15.368 41.898 16.004 41.898 16.7C41.898 17.384 42.006 18.02 42.222 18.608C42.438 19.184 42.738 19.688 43.122 20.12C43.506 20.552 43.956 20.888 44.472 21.128C45 21.368 45.576 21.488 46.2 21.488C47.052 21.488 47.808 21.278 48.468 20.858C49.128 20.438 49.698 19.778 50.178 18.878L51.672 19.94ZM62.4256 18.536C62.4256 19.316 62.2876 20 62.0116 20.588C61.7356 21.176 61.3696 21.668 60.9136 22.064C60.4696 22.46 59.9596 22.76 59.3836 22.964C58.8196 23.156 58.2436 23.252 57.6556 23.252C57.0676 23.252 56.4856 23.156 55.9096 22.964C55.3456 22.76 54.8356 22.46 54.3796 22.064C53.9356 21.668 53.5756 21.176 53.2996 20.588C53.0236 20 52.8856 19.316 52.8856 18.536C52.8856 17.768 53.0236 17.09 53.2996 16.502C53.5756 15.914 53.9356 15.422 54.3796 15.026C54.8356 14.63 55.3456 14.33 55.9096 14.126C56.4856 13.922 57.0676 13.82 57.6556 13.82C58.2436 13.82 58.8196 13.922 59.3836 14.126C59.9596 14.33 60.4696 14.63 60.9136 15.026C61.3696 15.422 61.7356 15.914 62.0116 16.502C62.2876 17.09 62.4256 17.768 62.4256 18.536ZM57.6556 21.56C58.0516 21.56 58.4236 21.488 58.7716 21.344C59.1196 21.2 59.4256 20.996 59.6896 20.732C59.9536 20.468 60.1636 20.15 60.3196 19.778C60.4756 19.406 60.5536 18.992 60.5536 18.536C60.5536 18.08 60.4756 17.666 60.3196 17.294C60.1636 16.922 59.9536 16.604 59.6896 16.34C59.4256 16.076 59.1196 15.872 58.7716 15.728C58.4236 15.584 58.0516 15.512 57.6556 15.512C57.2596 15.512 56.8876 15.584 56.5396 15.728C56.1916 15.872 55.8856 16.076 55.6216 16.34C55.3576 16.604 55.1476 16.922 54.9916 17.294C54.8356 17.666 54.7576 18.08 54.7576 18.536C54.7576 18.992 54.8356 19.406 54.9916 19.778C55.1476 20.15 55.3576 20.468 55.6216 20.732C55.8856 20.996 56.1916 21.2 56.5396 21.344C56.8876 21.488 57.2596 21.56 57.6556 21.56ZM76.9048 23H75.0688V17.096C75.0688 16.58 74.9428 16.178 74.6908 15.89C74.4508 15.59 74.0608 15.44 73.5208 15.44C72.9808 15.44 72.5188 15.65 72.1348 16.07C71.7508 16.478 71.5588 17.15 71.5588 18.086V23H69.7228V17.15C69.7228 16.646 69.5968 16.238 69.3448 15.926C69.1048 15.602 68.7388 15.44 68.2468 15.44C67.7068 15.44 67.2328 15.662 66.8248 16.106C66.4288 16.538 66.2308 17.198 66.2308 18.086V23H64.3948V14.072H66.2308V15.35C66.5068 14.882 66.8788 14.51 67.3468 14.234C67.8148 13.958 68.3188 13.82 68.8588 13.82C69.4708 13.82 69.9808 13.952 70.3888 14.216C70.8088 14.48 71.1148 14.876 71.3068 15.404C71.6188 14.864 72.0148 14.468 72.4948 14.216C72.9868 13.952 73.5388 13.82 74.1508 13.82C75.0028 13.82 75.6748 14.066 76.1668 14.558C76.6588 15.038 76.9048 15.674 76.9048 16.466V23ZM79.2131 10.4H81.0491V15.422C81.3731 14.93 81.8111 14.54 82.3631 14.252C82.9151 13.964 83.5151 13.82 84.1631 13.82C84.7511 13.82 85.2971 13.934 85.8011 14.162C86.3171 14.378 86.7611 14.696 87.1331 15.116C87.5051 15.524 87.7991 16.016 88.0151 16.592C88.2311 17.168 88.3391 17.816 88.3391 18.536C88.3391 19.256 88.2251 19.904 87.9971 20.48C87.7811 21.056 87.4811 21.554 87.0971 21.974C86.7131 22.382 86.2571 22.7 85.7291 22.928C85.2131 23.144 84.6611 23.252 84.0731 23.252C83.3531 23.252 82.7291 23.096 82.2011 22.784C81.6851 22.472 81.3011 22.106 81.0491 21.686V23H79.2131V10.4ZM83.6951 21.56C84.0791 21.56 84.4391 21.488 84.7751 21.344C85.1111 21.2 85.4051 20.996 85.6571 20.732C85.9091 20.456 86.1071 20.138 86.2511 19.778C86.3951 19.406 86.4671 18.992 86.4671 18.536C86.4671 18.092 86.3951 17.684 86.2511 17.312C86.1071 16.94 85.9091 16.622 85.6571 16.358C85.4051 16.082 85.1111 15.872 84.7751 15.728C84.4391 15.584 84.0791 15.512 83.6951 15.512C83.3111 15.512 82.9511 15.584 82.6151 15.728C82.2791 15.872 81.9851 16.082 81.7331 16.358C81.4811 16.622 81.2831 16.94 81.1391 17.312C80.9951 17.684 80.9231 18.092 80.9231 18.536C80.9231 18.992 80.9951 19.406 81.1391 19.778C81.2831 20.138 81.4811 20.456 81.7331 20.732C81.9851 20.996 82.2791 21.2 82.6151 21.344C82.9511 21.488 83.3111 21.56 83.6951 21.56ZM90.1463 14.072H91.9823V23H90.1463V14.072ZM90.0203 10.58H92.1083V12.65H90.0203V10.58ZM102.481 23H100.645V17.474C100.645 16.862 100.471 16.382 100.123 16.034C99.7865 15.686 99.3005 15.512 98.6645 15.512C98.3405 15.512 98.0345 15.578 97.7465 15.71C97.4705 15.842 97.2245 16.028 97.0085 16.268C96.8045 16.508 96.6365 16.802 96.5045 17.15C96.3845 17.486 96.3245 17.864 96.3245 18.284V23H94.4885V14.072H96.3245V15.566C96.6365 15.038 97.0565 14.618 97.5845 14.306C98.1245 13.982 98.7185 13.82 99.3665 13.82C99.7985 13.82 100.207 13.892 100.591 14.036C100.975 14.168 101.305 14.366 101.581 14.63C101.857 14.882 102.073 15.206 102.229 15.602C102.397 15.986 102.481 16.43 102.481 16.934V23ZM110.927 23C110.819 22.868 110.711 22.682 110.603 22.442C110.507 22.19 110.447 21.854 110.423 21.434C110.135 22.034 109.733 22.49 109.217 22.802C108.701 23.102 108.113 23.252 107.453 23.252C106.997 23.252 106.583 23.186 106.211 23.054C105.839 22.922 105.521 22.736 105.257 22.496C104.993 22.244 104.783 21.95 104.627 21.614C104.483 21.278 104.411 20.906 104.411 20.498C104.411 20.054 104.495 19.664 104.663 19.328C104.831 18.98 105.059 18.692 105.347 18.464C105.635 18.224 105.965 18.032 106.337 17.888C106.721 17.744 107.129 17.636 107.561 17.564L110.387 17.114V16.736C110.387 15.704 109.763 15.188 108.515 15.188C107.879 15.188 107.411 15.308 107.111 15.548C106.811 15.776 106.661 16.046 106.661 16.358C106.661 16.406 106.661 16.448 106.661 16.484C106.661 16.508 106.673 16.556 106.697 16.628L105.059 17.186C104.963 16.958 104.915 16.718 104.915 16.466C104.915 16.118 104.993 15.788 105.149 15.476C105.317 15.152 105.557 14.87 105.869 14.63C106.181 14.378 106.559 14.18 107.003 14.036C107.447 13.892 107.951 13.82 108.515 13.82C109.739 13.82 110.663 14.084 111.287 14.612C111.911 15.128 112.223 15.872 112.223 16.844V20.768C112.223 21.284 112.259 21.704 112.331 22.028C112.415 22.34 112.559 22.664 112.763 23H110.927ZM107.741 21.722C108.137 21.722 108.497 21.65 108.821 21.506C109.157 21.35 109.439 21.14 109.667 20.876C109.895 20.6 110.069 20.282 110.189 19.922C110.321 19.55 110.387 19.148 110.387 18.716V18.464L107.975 18.878C107.411 18.974 106.979 19.148 106.679 19.4C106.391 19.64 106.247 19.97 106.247 20.39C106.247 20.798 106.379 21.122 106.643 21.362C106.919 21.602 107.285 21.722 107.741 21.722ZM113.613 14.072H115.053V11.66H116.889V14.072H118.887V15.548H116.889V20.282C116.889 20.726 116.985 21.056 117.177 21.272C117.369 21.488 117.681 21.596 118.113 21.596C118.209 21.596 118.317 21.584 118.437 21.56C118.569 21.536 118.683 21.512 118.779 21.488L118.941 23.036C118.773 23.096 118.575 23.144 118.347 23.18C118.119 23.228 117.873 23.252 117.609 23.252C117.273 23.252 116.949 23.21 116.637 23.126C116.325 23.042 116.049 22.898 115.809 22.694C115.581 22.49 115.395 22.22 115.251 21.884C115.119 21.536 115.053 21.11 115.053 20.606V15.548H113.613V14.072ZM129.504 18.536C129.504 19.316 129.366 20 129.09 20.588C128.814 21.176 128.448 21.668 127.992 22.064C127.548 22.46 127.038 22.76 126.462 22.964C125.898 23.156 125.322 23.252 124.734 23.252C124.146 23.252 123.564 23.156 122.988 22.964C122.424 22.76 121.914 22.46 121.458 22.064C121.014 21.668 120.654 21.176 120.378 20.588C120.102 20 119.964 19.316 119.964 18.536C119.964 17.768 120.102 17.09 120.378 16.502C120.654 15.914 121.014 15.422 121.458 15.026C121.914 14.63 122.424 14.33 122.988 14.126C123.564 13.922 124.146 13.82 124.734 13.82C125.322 13.82 125.898 13.922 126.462 14.126C127.038 14.33 127.548 14.63 127.992 15.026C128.448 15.422 128.814 15.914 129.09 16.502C129.366 17.09 129.504 17.768 129.504 18.536ZM124.734 21.56C125.13 21.56 125.502 21.488 125.85 21.344C126.198 21.2 126.504 20.996 126.768 20.732C127.032 20.468 127.242 20.15 127.398 19.778C127.554 19.406 127.632 18.992 127.632 18.536C127.632 18.08 127.554 17.666 127.398 17.294C127.242 16.922 127.032 16.604 126.768 16.34C126.504 16.076 126.198 15.872 125.85 15.728C125.502 15.584 125.13 15.512 124.734 15.512C124.338 15.512 123.966 15.584 123.618 15.728C123.27 15.872 122.964 16.076 122.7 16.34C122.436 16.604 122.226 16.922 122.07 17.294C121.914 17.666 121.836 18.08 121.836 18.536C121.836 18.992 121.914 19.406 122.07 19.778C122.226 20.15 122.436 20.468 122.7 20.732C122.964 20.996 123.27 21.2 123.618 21.344C123.966 21.488 124.338 21.56 124.734 21.56ZM136.243 15.656C136.003 15.584 135.769 15.548 135.541 15.548C135.217 15.548 134.917 15.62 134.641 15.764C134.365 15.896 134.125 16.088 133.921 16.34C133.729 16.58 133.579 16.868 133.471 17.204C133.363 17.54 133.309 17.906 133.309 18.302V23H131.473V14.072H133.309V15.584C133.549 15.056 133.885 14.63 134.317 14.306C134.749 13.982 135.271 13.82 135.883 13.82C136.003 13.82 136.111 13.832 136.207 13.856C136.315 13.868 136.429 13.886 136.549 13.91L136.243 15.656Z"
									fill="#94a3b8"
								/>
								<path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V32H0V0Z" fill="#94a3b8" />
								<path
									d="M14.9223 18.0934L9.42969 7.8042H11.9398L15.1708 14.3157C15.2206 14.4317 15.2786 14.5518 15.3448 14.6761C15.4111 14.8003 15.4691 14.9288 15.5187 15.0613C15.552 15.1111 15.5767 15.1566 15.5933 15.1981C15.61 15.2394 15.6265 15.2767 15.6431 15.3098C15.7258 15.4756 15.8005 15.6371 15.8667 15.7944C15.933 15.9519 15.991 16.0968 16.0407 16.2294C16.1732 15.9477 16.3182 15.6453 16.4756 15.3223C16.6331 14.9992 16.7946 14.6637 16.9602 14.3157L20.241 7.8042H22.5771L17.0348 18.2177V24.8536H14.9223V18.0934Z"
									fill="white"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div>
					<div className="flex  justify-center !rounded-2xl overflow-hidden dark:bg-[#2e344033] bg-[#fbfbfb]">
						<HomescreenSvg className="scaled-svg" style={{ width: '90%', height: '90%' }} />
					</div>
				</div>
			</div>
		</div>
	);
}
