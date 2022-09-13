import Head from 'next/head';
import { useRouter } from 'next/router';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Images
import bannerImage from '../public/management-banner.jpg';

// Components
import Banner from '../components/Banner';

// styles
import styles from '../styles/Management.module.scss';

const Management = props => {
	const { t } = useTranslation(['management', 'common']);
	const router = useRouter();

	const managementArray = t('management', { returnObjects: true });

	return (
		<div className={`${styles.management} ${router.locale === 'en' ? styles.english : undefined}`}>
			<Head>
				<title>Management - Quantinum Investment</title>
				<meta name="description" content={t('description', { ns: 'common' })} />
				<meta name="keywords" content={t('keywords', { ns: 'common' })} />
			</Head>
			<Banner
				imageSrc={bannerImage}
				layout="fill"
				objectFit="cover"
				title={'Management'}
				subtitle={''}
			/>
			<section className="container mt">
				{managementArray.map(item => (
					<Member
						key={item.id}
						title={item.title}
						name={item.name}
						career={item.career}
						degree={item.degree}
					/>
				))}
			</section>
		</div>
	);
};

const Member = ({ title, name, career, degree }) => {
	const { t } = useTranslation('management');
	console.log('career :>> ', career);

	return (
		<div className={styles.member}>
			<div className={styles.name}>
				<div>
					<p>{title}</p>
					<h4>{name}</h4>
				</div>
			</div>
			<div className={styles.profile}>
				{career && (
					<div className={styles.career}>
						<h5 className="ko">Career</h5>
						<ol>
							{career.map(career => (
								<li key={career.length}>{career}</li>
							))}
						</ol>
					</div>
				)}

				{degree && (
					<div className={styles.degree}>
						<h5 className="ko">Degree</h5>
						<li>{degree}</li>
					</div>
				)}
			</div>
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['management', 'common'])),
	},
});

export default Management;
