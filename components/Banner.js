import Image from 'next/image';
import { motion } from 'framer-motion';

// styles
import styles from '../styles/Banner.module.scss';

const parent = {
	animate: { transition: { staggerChildren: 0.3, delayChildren: 0.3 } },
};

const textSlideUp = {
	initial: { y: 15, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const Banner = ({ imageSrc, title, subtitle, subtitle2, subtitle3, isSecond }) => {
	return (
		<div className={styles.banner}>
			<Image src={imageSrc} layout="fill" objectFit="cover" alt="Banner Image" placeholder="blur" />
			<motion.div
				variants={parent}
				initial="initial"
				animate="animate"
				exit="exit"
				className={`container ${styles['banner-text']} ${isSecond ? styles.second : undefined}`}>
				<motion.h1 variants={textSlideUp} className="en">
					{title}
				</motion.h1>
				{subtitle && (
					<motion.p variants={textSlideUp}>
						<span className="break-line">
							{subtitle} {subtitle2 && <span className="break-line-mo">{subtitle2}</span>}
						</span>

						{subtitle3 && <>{subtitle3}</>}
					</motion.p>
				)}
			</motion.div>
		</div>
	);
};

export default Banner;
