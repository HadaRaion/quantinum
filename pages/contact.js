import Head from 'next/head';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// components
import Map from '../components/Map';
import Form from '../components/Form';

// styles
import styles from '../styles/Contact.module.scss';

const Contact = props => {
	const { t } = useTranslation(['common', 'etc']);

	return (
		<div className={styles.contact}>
			<Head>
				<title>Contact - Quantinum Investment</title>
				<meta name="description" content={t('description', { ns: 'common' })} />
				<meta name="keywords" content={t('keywords', { ns: 'common' })} />
			</Head>
			<Map height={850} />
			<div className={`mt container ${styles.info}`}>
				<div className={styles['form-wrapper']}>
					<Form />
				</div>
				<div className={styles['address-wrapper']}>
					<h3 className="en">Our Office</h3>
					<div className="mt-sm">
						<p className="small">Our Location</p>
						<h5>{t('address')}</h5>
					</div>
					<div className="mt-sm">
						<p className="small">Write To Us</p>
						<h5>
							<a href="mailto:info@quantinuminvestment.com">info@quantinuminvestment.com</a>
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common', 'etc'])),
	},
});

export default Contact;
