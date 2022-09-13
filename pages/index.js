import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Lottie
import Lottie from 'react-lottie';
import animationDataForDesktop from '../svg/QI_logo_ani_horizontal.json';
import animationDataForMobile from '../svg/QI_logo_ani_vertical.json';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// components
import { useMediaQuery } from 'react-responsive';

// styles
import styles from '../styles/Home.module.scss';

const Homepage = () => {
	const { t } = useTranslation('common');

	const defaultOptions = {
		loop: true,
		autoplay: true,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	const animationForDesktop = {
		...defaultOptions,
		animationData: animationDataForDesktop,
	};

	const animationForMobile = {
		...defaultOptions,
		animationData: animationDataForMobile,
	};

	const isMobile = useMediaQuery({ query: '(max-width: 901px)' });
	const [showOnMobile, setShowOnMobile] = useState(false);

	useEffect(() => {
		setShowOnMobile(isMobile);
	}, [isMobile]);

	return (
		<div className={styles.home}>
			<Head>
				<title>Quantinum Investment</title>
				<meta name="description" content={t('description')} />
				<meta name="keywords" content={t('keywords')} />
			</Head>
			<div className={styles['animation-wrapper']}>
				{showOnMobile ? (
					<Lottie options={animationForMobile} />
				) : (
					<Lottie options={animationForDesktop} />
				)}
			</div>
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

export default Homepage;
