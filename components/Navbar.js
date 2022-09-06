import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation, i18n } from 'next-i18next';

const Navbar = () => {
	const router = useRouter();
	const { t } = useTranslation('common');
	const changeTo = router.locale === 'en' ? 'ko' : 'en';

	return (
		<header className="site-header">
			<div className="container">
				<nav>
					<div className="logo">
						{/* <Image src="/logo.png" alt="site logo" width={128} height={77} /> */}
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

export default Navbar;
