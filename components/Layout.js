import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<>
			{/* <Header /> */}
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
