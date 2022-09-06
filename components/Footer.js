import { useTranslation, Trans } from 'next-i18next';

const Footer = props => {
	const { t } = useTranslation('common');

	return (
		<footer>
			<p> {t('description')} </p>
		</footer>
	);
};

export default Footer;
