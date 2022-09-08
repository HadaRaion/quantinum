import Layout from '../components/Layout';
import { appWithTranslation } from 'next-i18next';

import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
export default appWithTranslation(MyApp);
