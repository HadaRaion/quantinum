//styles
import styles from '../styles/Footer.module.scss';

const Footer = () => {
	return (
		<footer className={`${styles.footer} mt`}>
			<p className="small">
				<span className="break-line-mo">© Copyright 2022. </span>
				All Rights Reserved by Quantinum investment.
			</p>
		</footer>
	);
};

export default Footer;
