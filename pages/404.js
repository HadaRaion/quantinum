import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const NotFound = props => {
	const router = useRouter();

	// function setScreenSize() {
	// 	let vh = window.innerHeight * 0.01;

	// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
	// }

	// setScreenSize();

	// window.addEventListener('resize', () => setScreenSize());
	// window.addEventListener('touchend', () => setScreenSize());
	useEffect(() => {
		setTimeout(() => {
			// router.back();
			router.push('/');
		}, 3000);
	}, []);

	return (
		<div className="not-found">
			<h1>Ooops...</h1>
			<h2>That page cannot be found :(</h2>
			<p>
				Going back to the{' '}
				<Link href="/">
					<a>Homepage</a>
				</Link>{' '}
				is 3 seconds...
			</p>
		</div>
	);
};

export default NotFound;
