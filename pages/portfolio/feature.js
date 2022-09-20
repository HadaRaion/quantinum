import Head from 'next/head';
import { useRouter } from 'next/router';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Images
import bannerImage1 from '../../public/feature-banner1.jpg';
import bannerImage2 from '../../public/feature-banner2.jpg';

// Components
import Banner from '../../components/Banner';

// styles
import styles from '../../styles/Feature.module.scss';

const Feature = props => {
	const { t } = useTranslation(['feature', 'common']);
	const router = useRouter();

	const capitalMarketFeatures = t('capital-market-features', { returnObjects: true });
	const realEstateFeatures = t('real-estate-features', { returnObjects: true });

	return (
		<div className={`${styles.feature} ${router.locale === 'en' ? styles.english : undefined}`}>
			<Head>
				<title>{t('title-feature', { ns: 'common' })}</title>
				<meta name="description" content={t('description', { ns: 'common' })} />
				<meta name="keywords" content={t('keywords', { ns: 'common' })} />
				<meta property="og:title" content={t('title-feature', { ns: 'common' })} />
				<meta property="og:description" content={t('description', { ns: 'common' })} />
			</Head>
			<Banner
				imageSrc={bannerImage1}
				layout="fill"
				objectFit="cover"
				title={'EQUITY CAPITAL MARKET'}
				subtitle={t('capital-market-subtitle1')}
				subtitle2={t('capital-market-subtitle2')}
				subtitle3={t('capital-market-subtitle3')}
			/>
			<section className={`container mt`}>
				<ul className={styles['capital-market-features']}>
					{typeof capitalMarketFeatures === 'object' &&
						capitalMarketFeatures.map(el => (
							<FeatureEl key={el.id} title={el.title} cons={el.cons} pros={el.pros} />
						))}
				</ul>
			</section>
			<Banner
				imageSrc={bannerImage2}
				layout="fill"
				objectFit="cover"
				title={'REAL ESTATE FINANCING'}
				subtitle={t('real-estate-subtitle1')}
				subtitle2={t('real-estate-subtitle2')}
				subtitle3={t('real-estate-subtitle3')}
				isSecond={true}
			/>
			<section className={`container mt`}>
				<ul className={styles['real-estate-features']}>
					{typeof realEstateFeatures === 'object' &&
						realEstateFeatures.map(el => (
							<FeatureEl key={el.id} title={el.title} cons={el.cons} pros={el.pros} />
						))}
				</ul>
			</section>
		</div>
	);
};

const FeatureEl = ({ title, cons, pros }) => {
	return (
		<li>
			<div className={styles.title}>
				<h4>{title}</h4>
			</div>
			<div className={styles.cons}>{cons}</div>
			<div className={styles.arrow}></div>
			<div className={styles.pros}>{pros}</div>
		</li>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['feature', 'common'])),
	},
});

export default Feature;
