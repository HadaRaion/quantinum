import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

// Framer motion
import { motion, AnimatePresence } from 'framer-motion';

//Components
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

//Styles
import styles from '../styles/Layout.module.scss';

const pageTransition = {
	hidden: {
		x: '100vw',
	},
	show: {
		x: '0',
		transition: {
			type: 'tween',
			duration: 0.2,
		},
	},
	exit: {
		x: '-100vw',
		transition: {
			type: 'tween',
			duration: 0.2,
		},
	},
};

const Layout = ({ children }) => {
	const router = useRouter();
	const isMobile = useMediaQuery({ query: '(max-width: 901px)' });
	const [showOnMobile, setShowOnMobile] = useState(false);
	const [menuState, setMenuState] = useState(false);
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

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

				<div className="to-top-btn show" onClick={goToTop}>
					<AnimatePresence>
						{showTopBtn ? (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 0.5 } }}
								className="icon-position icon-style">
								<div className="arrow-up"></div>
							</motion.div>
						) : null}
					</AnimatePresence>
				</div>

				<Footer />
			</>
		);
	}
};

export default Layout;

{
	/* <AnimatePresence
	exitBeforeEnter
	initial={false}
	mode="wait"
	onExitComplete={() => window.scrollTo(0, 0)}>
	<motion.main
		key={router.asPath}
		variants={pageTransition}
		initial="hidden"
		animate="show"
		exit="exit"
		className={styles.main}>
		{children}
	</motion.main>
</AnimatePresence>; */
}
