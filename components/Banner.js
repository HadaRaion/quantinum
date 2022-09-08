import Image from 'next/image';

// styles
import styles from '../styles/Banner.module.scss';

const Banner = ({ imageSrc, title, subtitle }) => {
	return (
		<div className={styles.banner}>
			<Image src={imageSrc} layout="fill" objectFit="cover" alt="Banner Image" />
			<div className={`container ${styles['banner-text']}`}>
				<h1 className="en">{title}</h1>
				{subtitle !== null && <p>{subtitle}</p>}
			</div>
		</div>
	);
};

export default Banner;
