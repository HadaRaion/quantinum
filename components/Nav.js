import Link from 'next/link';
import { useRouter } from 'next/router';

// styles
import styles from '../styles/Nav.module.scss';

const Nav = ({ whiteMenu }) => {
	const router = useRouter();
	const changeTo = router.locale === 'en' ? 'ko' : 'en';

	return (
		<ul className={`${styles.nav} ${whiteMenu ? styles.white : ''}`}>
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
					{changeTo}
				</Link>
			</li>
		</ul>
	);
};

export default Nav;
