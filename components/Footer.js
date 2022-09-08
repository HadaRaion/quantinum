//styles
import styles from '../styles/Footer.module.scss';

const Footer = props => {
	return (
		<footer className={styles.footer}>
			<p>
				<span className="line-break">© Copyright 2022. </span>
				All Rights Reserved by Quantinum investment.
			</p>
		</footer>
	);
};

export default Footer;
