import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

import Div100vh from 'react-div-100vh';
// import { motion } from 'framer-motion';

//Components
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

//Styles
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 901px)' });
	const [showOnMobile, setShowOnMobile] = useState(false);
	const [menuState, setMenuState] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setShowOnMobile(isMobile);
	}, [isMobile]);

	useEffect(() => {
		menuState
			? document.body.classList.add('body-lock')
			: document.body.classList.remove('body-lock');
	}, [menuState]);

	if (router.pathname === '/') {
		return (
			<>
				{/* <Div100vh></Div100vh> */}
				<Header
					setMenuState={setMenuState}
					showOnMobile={showOnMobile}
					whiteMenu={router.pathname === '/contact'}
				/>
				<MobileNav menuState={menuState} setMenuState={setMenuState} />

				<main className={styles.main}>{children}</main>
			</>
		);
	} else {
		return (
			<>
				<Header
					setMenuState={setMenuState}
					showOnMobile={showOnMobile}
					whiteMenu={router.pathname === '/contact'}
				/>
				<MobileNav menuState={menuState} setMenuState={setMenuState} />
				<main className={styles.main}>{children}</main>
				<Footer />
			</>
		);
	}
};

export default Layout;
