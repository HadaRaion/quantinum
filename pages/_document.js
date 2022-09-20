import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link rel="canonical" href="https://quantinuminvestment.com/"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
				/>

				<meta name="naver-site-verification" content="1da6ad05738ec54cbbb99e19901b567e8ee45130" />
				<meta
					name="google-site-verification"
					content="_ew7GxHnZcyCLktIoowPPh9BpAGfTeVSu_mHDIXJ5NE"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="../public/QI-logo.jpg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
