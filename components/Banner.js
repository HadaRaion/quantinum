import Image from 'next/image';

// styles
import styles from '../styles/Banner.module.scss';

const Banner = ({ imageSrc, title, subtitle, subtitle2, subtitle3, isSecond }) => {
	return (
		<div className={styles.banner}>
			<Image src={imageSrc} layout="fill" objectFit="cover" alt="Banner Image" />
			<div className={`container ${styles['banner-text']} ${isSecond ? styles.second : undefined}`}>
				<h1 className="en">{title}</h1>
				{subtitle && (
					<p>
						<span className="break-line">
							{subtitle} {subtitle2 && <span className="break-line-mo">{subtitle2}</span>}
						</span>

						{subtitle3 && <>{subtitle3}</>}
					</p>
				)}
			</div>
		</div>
	);
};

export default Banner;
