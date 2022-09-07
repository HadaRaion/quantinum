// styles
import styles from '../styles/Header.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation, i18n } from 'next-i18next';

const Header = () => {
	const router = useRouter();
	const { t } = useTranslation('common');
	const changeTo = router.locale === 'en' ? 'ko' : 'en';

	return (
		<header className={styles['site-header']}>
			<div className="container">
				<nav>
					<div className="logo">
						<Image src="/logo.svg" alt="site logo" width={131} height={39} />
					</div>
					<ul>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href="/management">
								<a>Management</a>
							</Link>
						</li>
						<li>
							<Link href="/portfolio">
								<a>Portfolio</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a>Contact</a>
							</Link>
						</li>
						<li>
							<Link href="/" locale={changeTo}>
								<button>{t('change-locale', { changeTo })}</button>
							</Link>
						</li>
					</ul>
					<div className="hamburger">
						<div className="hamburger-icon"></div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
