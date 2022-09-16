import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

// i18n
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Images
import bannerImage1 from '../../public/ROI-banner1.jpg';
import bannerImage2 from '../../public/ROI-banner2.jpg';

// Components
import Banner from '../../components/Banner';
import CountUp, { useCountUp } from 'react-countup';

// styles
import styles from '../../styles/ROI.module.scss';

const ROI = () => {
	const { t } = useTranslation(['roi', 'common']);
	const router = useRouter();

	const tableHead = t('thead', { returnObjects: true });
	const fixedPeriodData = t('fixed-period', { returnObjects: true });
	const estPeriodData = t('est-period', { returnObjects: true });

	return (
		<div className={`${styles.roi} ${router.locale === 'en' ? styles.en : undefined}`}>
			<Head>
				<title>Management - Quantinum Investment</title>
				<meta name="description" content={t('description', { ns: 'common' })} />
				<meta name="keywords" content={t('keywords', { ns: 'common' })} />
			</Head>
			<Banner
				imageSrc={bannerImage1}
				layout="fill"
				objectFit="cover"
				title={t('banner-title')}
				subtitle={''}
			/>

			<section className={`container mt ${styles.first}`}>
				<div className={styles.summary}>
					<div className={styles.rate}>
						<div className={styles.label}>{fixedPeriodData['roi-title']}</div>
						<div className={`${styles.first} ${styles.value}`}>
							<Counter num={fixedPeriodData.roi} />
						</div>
					</div>
					<div className={styles.rate}>
						<div className={styles.label}>{fixedPeriodData['annual-title']}</div>
						<div className={styles.value}>
							<Counter num={fixedPeriodData.annual} />
						</div>
					</div>
					<div className={styles.note}>{fixedPeriodData.note}</div>
				</div>

				<div>
					<Table
						caption={'Equity Capital Market'}
						thead={tableHead}
						tbody={fixedPeriodData['equity-capital-data']}
					/>
				</div>
				<div className={styles.el}>
					<Table
						caption={'REAL ESTATE FINANCING'}
						thead={tableHead}
						tbody={fixedPeriodData['real-estate-data']}
					/>
				</div>
			</section>

			<section className={`mt ${styles.quote}`}>
				<Image
					placeholder="blur"
					src={bannerImage2}
					layout="fill"
					objectFit="cover"
					alt="Banner Image"
				/>
				<div className={`container ${styles.text}`}>
					<h2 className="en">
						The passion to excel.
						<br />
						We think different and provide tailor-made solutions <br />
						for your sustainable growth.
					</h2>
					<h5 className="ko">Sunghee Kang, CEO</h5>
				</div>
			</section>

			<section className={`container mt`}>
				<div className={styles.summary}>
					<div className={styles.rate}>
						<div className={styles.label}>{estPeriodData['roi-title']}</div>
						<div className={styles.value}>
							<Counter num={estPeriodData.roi} />
						</div>
					</div>
					<div className={styles.rate}>
						<div className={styles.label}>{estPeriodData['annual-title']}</div>
						<div className={styles.value}>
							<Counter num={estPeriodData.annual} />
						</div>
					</div>
					<div className={styles.note}>{estPeriodData.note}</div>
				</div>

				<div>
					<Table
						caption={'Equity Capital Market'}
						thead={tableHead}
						tbody={estPeriodData['equity-capital-data']}
					/>
				</div>

				<div className={styles.el}>
					<Table
						caption={'REAL ESTATE FINANCING'}
						thead={tableHead}
						tbody={estPeriodData['real-estate-data']}
					/>
				</div>
			</section>
		</div>
	);
};
const Counter = ({ num }) => {
	return <CountUp start={0.0} end={num} decimals={2} duration={1.2} suffix="%" enableScrollSpy />;
};

const Table = ({ caption, thead, tbody }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 901px)' });
	const [showOnMobile, setShowOnMobile] = useState(false);
	const [dropdown, setDropdown] = useState(null);

	const clickHandler = index => {
		setDropdown(prev => {
			return prev === index ? null : index;
		});
	};

	useEffect(() => {
		setShowOnMobile(isMobile);
	}, [isMobile]);

	return (
		<table>
			<caption>{caption}</caption>
			<thead>
				<tr>
					{typeof thead === 'object' &&
						thead.map(el => (
							<th key={Math.random()} scope="col">
								{el}
							</th>
						))}
				</tr>
			</thead>
			<tbody>
				{typeof tbody === 'object' &&
					tbody.map((el, index) => (
						<tr key={Math.random()}>
							<td scope="row" data-label={thead[0]}>
								{el.product}
								{showOnMobile && (
									<button onClick={() => clickHandler(index)}>
										{dropdown === index ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="25"
												height="25"
												viewBox="0 0 25 25">
												<rect width="25" height="25" fill="#e0e0e0" />
												<line
													x2="15"
													transform="translate(5 12.5)"
													fill="none"
													stroke="#fff"
													strokeWidth="1"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="25"
												height="25"
												viewBox="0 0 25 25">
												<rect width="25" height="25" fill="#e0e0e0" />
												<line
													x2="15"
													transform="translate(5 12.5)"
													fill="none"
													stroke="#fff"
													strokeWidth="1"
												/>
												<line
													x2="15"
													transform="translate(12.5 5) rotate(90)"
													fill="none"
													stroke="#fff"
													strokeWidth="1"
												/>
											</svg>
										)}
									</button>
								)}
							</td>

							{dropdown === index && (
								<>
									<td data-label={thead[1]}>{el.total}</td>
									<td data-label={thead[2]}>{el.start}</td>
									<td data-label={thead[3]}>{el.period}</td>
									<td data-label={thead[4]}>{el['period-roi']}</td>
									<td data-label={thead[5]}>{el['annual-roi']}</td>
									<td data-label={thead[6]}>{el.remarks}</td>
								</>
							)}

							{!showOnMobile && (
								<>
									<td data-label={thead[1]}>{el.total}</td>
									<td data-label={thead[2]}>{el.start}</td>
									<td data-label={thead[3]}>{el.period}</td>
									<td data-label={thead[4]}>{el['period-roi']}</td>
									<td data-label={thead[5]}>{el['annual-roi']}</td>
									<td data-label={thead[6]}>{el.remarks}</td>
								</>
							)}
						</tr>
					))}
			</tbody>
		</table>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['roi', 'common'])),
	},
});

export default ROI;
