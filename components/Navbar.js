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
		<nav>
			<div className="logo">
				{/* <Image src="/logo.png" alt="site logo" width={128} height={77} /> */}
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/management">
				<a>Management</a>
			</Link>
			<Link href="/portfolio">
				<a>Portfolio</a>
			</Link>
			<Link href="/contact">
				<a>Contact</a>
			</Link>
			<Link href="/" locale={changeTo}>
				<button>{t('change-locale', { changeTo })}</button>
			</Link>
		</nav>
	);
};

export default Navbar;
