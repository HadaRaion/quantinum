import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';

// motion
import { useInView } from 'framer-motion';

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

const About = props => {
	const { t } = useTranslation(['about', 'common']);
	const router = useRouter();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

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

			<section ref={ref} className={`${styles['about-us']} container mt`}>
				<div className={styles['image-wrapper']}>
					<Image
						src={aboutUsImage}
						placeholder="blur"
						alt="About us"
						layout="fill"
						objectFit="cover"
						style={{
							transform: isInView ? 'none' : 'translateX(-200px)',
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}
					/>
				</div>

				<div>
					<h3 className={router.locale === 'ko' ? 'ko' : 'en'}>{t('about-us')}</h3>
					{router.locale === 'ko' && (
						<>
							<h3 className="ko">{t('about-us2')}</h3>
							<h3 className="ko">{t('about-us3')}</h3>
							<h3 className="ko">{t('about-us4')}</h3>
							<p>
								Here to create portfolios that drive stability and high returns for customers with
								investment convergence portfolio of capital market and real estate PF.
							</p>
						</>
					)}

					<button className="btn" onClick={handleClick}>
						VIEW OUR PROS
					</button>
				</div>
			</section>

			<section className={`${styles.cards} mt`}>
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
			</section>

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
