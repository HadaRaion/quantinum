import Head from 'next/head';

// Framer motion
import { motion } from 'framer-motion';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// components
import Map from '../components/Map';
import Form from '../components/Form';

// styles
import styles from '../styles/Contact.module.scss';

const slideInUp = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 1 } },
};

const Contact = props => {
	const { t } = useTranslation(['etc', 'common']);

	return (
		<div className={styles.contact}>
			<Head>
				<title>Contact - Quantinum Investment</title>
				<meta name="description" content={t('description', { ns: 'common' })} />
				<meta name="keywords" content={t('keywords', { ns: 'common' })} />
			</Head>

			<div className={styles.map}>
				<Map height={850} />
			</div>

			<motion.div
				initial={'hidden'}
				whileInView={'visible'}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.1 }}
				className={`mt container ${styles.info}`}>
				<div className={styles['form-wrapper']}>
					<Form />
				</div>
				<div className={styles['address-wrapper']}>
					<motion.h3 variants={slideInUp} className="en">
						Our Office
					</motion.h3>
					<motion.div variants={slideInUp} className="mt-sm">
						<p className="small">Our Location</p>
						<h5>{t('address')}</h5>
					</motion.div>
					<motion.div variants={slideInUp} className="mt-sm">
						<p className="small">Write To Us</p>
						<h5>
							<a href="mailto:info@quantinuminvestment.com">info@quantinuminvestment.com</a>
						</h5>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['etc', 'common'])),
	},
});

export default Contact;
