import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
// import { motion } from 'framer-motion';

//Components
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

//Styles
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const [showOnMobile, setShowOnMobile] = useState(false);
	const [menuState, setMenuState] = useState(false);

	const location = useRouter();

	console.log('location :>> ', location);
	useEffect(() => {
		setShowOnMobile(isMobile);
	}, [isMobile]);

	useEffect(() => {
		menuState
			? document.body.classList.add('body-lock')
			: document.body.classList.remove('body-lock');
		console.log('menuState :>> ', menuState);
	}, [menuState]);

	return (
		<>
			<Header setMenuState={setMenuState} showOnMobile={showOnMobile} />
			<MobileNav menuState={menuState} setMenuState={setMenuState} />
			{/* {showOnMobile ? <h1>Mobile</h1> : <h1>Desktop</h1>} */}

			<main className={styles.main}>{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
