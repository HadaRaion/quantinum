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
import { useRef } from 'react';

const Layout = ({ children }) => {
	const router = useRouter();
	const isMobile = useMediaQuery({ query: '(max-width: 901px)' });
	const [showOnMobile, setShowOnMobile] = useState(false);
	const [menuState, setMenuState] = useState(false);
	const [showTopBtn, setShowTopBtn] = useState(false);
	const btnRef = useRef();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
				btnRef.current.classList.add('show');
			} else {
				setShowTopBtn(false);
				btnRef.current.classList.remove('show');
			}
		});
	}, [btnRef]);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

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
				<Header
					setMenuState={setMenuState}
					showOnMobile={showOnMobile}
					whiteMenu={router.pathname === '/contact'}
				/>
				<MobileNav menuState={menuState} setMenuState={setMenuState} />

				<main className={`${styles.main} ${styles.full}`}>{children}</main>
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
				<div ref={btnRef} className="top-to-btn" onClick={goToTop}>
					{showTopBtn && (
						<div className="icon-position icon-style">
							<span></span>
						</div>
					)}
				</div>
				<Footer />
			</>
		);
	}
};

export default Layout;
