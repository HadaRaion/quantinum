import bannerImage from '../public/about-banner.jpg';

//Components
import Banner from '../components/Banner';

// styles
import styles from '../styles/About.module.scss';

const About = props => {
	return (
		<div className={styles.about}>
			<Banner imageSrc={bannerImage} title={'About'} subtitle={'hello'} />
		</div>
	);
};

export default About;
