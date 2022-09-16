import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Framer motion
import { motion } from 'framer-motion';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Images
import bannerImage from '../public/about-banner.jpg';
import aboutUsImage from '../public/about-link.jpg';
import whatWeDoImage from '../public/about-what-we-do.jpg';
import competitiveEdgeImage from '../public/about-ce.jpg';
import investmentEdgeImage from '../public/about-iph.jpg';

// Components
import Banner from '../components/Banner';
import Map from '../components/Map';
import Form from '../components/Form';

// styles
import styles from '../styles/About.module.scss';

const slideInUp = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 1 } },
};

const About = props => {
	const { t } = useTranslation(['about', 'common']);
	const router = useRouter();

	const handleClick = e => {
		e.preventDefault();
		router.push('management');
	};

	return (
		<div className={styles.about}>
			<Head>
				<title>About - Quantinum Investment</title>
				<meta name="description" content={t('description', { ns: 'common' })} />
				<meta name="keywords" content={t('keywords', { ns: 'common' })} />
			</Head>
			<Banner
				imageSrc={bannerImage}
				layout="fill"
				objectFit="cover"
				title={'About'}
				subtitle={''}
			/>

			<motion.section
				initial={'hidden'}
				whileInView={'visible'}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.1 }}
				className={`${styles['about-us']} container mt`}>
				<motion.div variants={slideInUp} className={styles['image-wrapper']}>
					<Image
						src={aboutUsImage}
						placeholder="blur"
						alt="About us"
						layout="fill"
						objectFit="cover"
					/>
				</motion.div>

				<div>
					<motion.h3 variants={slideInUp} className={router.locale === 'ko' ? 'ko' : 'en'}>
						{t('about-us')}
					</motion.h3>
					{router.locale === 'ko' && (
						<>
							<motion.h3 variants={slideInUp} className="ko">
								{t('about-us2')}
							</motion.h3>
							<motion.h3 variants={slideInUp} className="ko">
								{t('about-us3')}
							</motion.h3>
							<motion.h3 variants={slideInUp} className="ko">
								{t('about-us4')}
							</motion.h3>
							<motion.p variants={slideInUp}>
								Here to create portfolios that drive stability and high returns for customers with
								investment convergence portfolio of capital market and real estate PF.
							</motion.p>
						</>
					)}

					<motion.button variants={slideInUp} className="btn" onClick={handleClick}>
						VIEW OUR PROS
					</motion.button>
				</div>
			</motion.section>

			<motion.section className={`${styles.cards} mt`}>
				<Card title={'What We Do'} text={t('what-we-do')} imgSrc={whatWeDoImage} />
				<Card
					title={'Competitive Edge'}
					text={t('competitive-edge')}
					imgSrc={competitiveEdgeImage}
				/>
				<Card
					title={'Investment Philosophy'}
					text={t('investment-philosophy')}
					imgSrc={investmentEdgeImage}
				/>
			</motion.section>

			<section className={`${styles['about-contact']} container mt`}>
				<div className={styles['form-wrapper']}>
					<Form />
				</div>
				<div className={styles['map-wrapper']}>
					<Map height={573} />
				</div>
			</section>
		</div>
	);
};

const Card = ({ title, text, imgSrc }) => {
	return (
		<div className={styles.card}>
			<div className={styles.front}>
				<Image placeholder="blur" src={imgSrc} alt="About us" layout="fill" objectFit="cover" />

				<h3 className="en">{title}</h3>
			</div>
			<div className={styles.back}>
				<h3 className="en">{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['about', 'common'])),
	},
});

export default About;
