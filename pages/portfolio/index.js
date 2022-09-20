import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Framer motion
import { motion } from 'framer-motion';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Images
import bannerImage from '../../public/portfolio-banner.jpg';
import linkImage1 from '../../public/portfolio-1.jpg';
import linkImage2 from '../../public/portfolio-2.jpg';
import linkImage3 from '../../public/portfolio-3.jpg';

// Components
import Banner from '../../components/Banner';

// styles
import styles from '../../styles/Portfolio.module.scss';

const slideInUp = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 1 } },
};

const Portfolio = props => {
	const { t } = useTranslation(['etc', 'common']);
	const router = useRouter();

	return (
		<div className={styles.portfolio}>
			<Head>
				<title>{t('title-portfolio', { ns: 'common' })}</title>
				<meta name="description" content={t('description', { ns: 'common' })} />
				<meta name="keywords" content={t('keywords', { ns: 'common' })} />
				<meta property="og:title" content={t('title-portfolio', { ns: 'common' })} />
				<meta property="og:description" content={t('description', { ns: 'common' })} />
			</Head>
			<Banner
				imageSrc={bannerImage}
				layout="fill"
				objectFit="cover"
				title={'Portfolio'}
				subtitle={''}
			/>
			<motion.section
				initial={'hidden'}
				whileInView={'visible'}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.1 }}
				className={`container mt ${styles.quote}`}>
				<motion.h2 variants={slideInUp} className="en">
					The passion to excel.
					<br />
					We think different and provide tailor-made solutions <br />
					for your sustainable growth.
				</motion.h2>

				<motion.h5 variants={slideInUp} className="ko">
					Sunghee Kang, CEO
				</motion.h5>
			</motion.section>

			<section className={`mt ${styles.links}`}>
				<div className={styles.right}>
					<Image
						placeholder="blur"
						src={linkImage1}
						alt="Building"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<div className={styles.left}>
					<div className={styles.bg2}>
						<Image
							placeholder="blur"
							src={linkImage2}
							alt="Working people"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className={`${styles.link} ${styles.link1}`}>
						<Link href="/portfolio/feature">
							<a className={router.locale === 'en' ? 'en' : undefined}>
								<span>{t('toFeature')}</span>
							</a>
						</Link>
					</div>
					<div className={`${styles.link} ${styles.link2}`}>
						<Link href="/portfolio/roi">
							<a className={router.locale === 'en' ? 'en' : undefined}>
								<span>{t('toROI')}</span>
							</a>
						</Link>
					</div>
					<div className={styles.bg3}>
						<Image
							placeholder="blur"
							src={linkImage3}
							alt="Laptop on the desk"
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['etc', 'common'])),
	},
});

export default Portfolio;
