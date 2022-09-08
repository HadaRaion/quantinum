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

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const [showOnMobile, setShowOnMobile] = useState(false);

	useEffect(() => {
		setShowOnMobile(isMobile);
	}, [isMobile]);

	return (
		<div className="home">
			<Head>
				<title>Quantinum Investment</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="keywords" content="퀀티넘, 투자자문, 인베스트먼트, 부동산투자" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <h1>{t('test')}</h1> */}
			<div className="svg">
				{/* {showOnMobile ? (
					<Lottie options={animationForMobile} />
				) : (
					<Lottie options={animationForDesktop} />
				)} */}
			</div>
		</div>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common', 'footer'])),
	},
});

export default Homepage;
