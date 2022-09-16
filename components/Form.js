import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// motion
import { motion } from 'framer-motion';

// styles
import styles from '../styles/Form.module.scss';

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const slideInUp = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 1 } },
};

const Form = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		e.target.reset();
		emailjs.sendForm(serviceID, templateID, form.current, emailKey).then(
			result => {
				e.target.reset();
			},
			error => {
				console.log(error.text);
			}
		);
	};

	return (
		<motion.form
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ once: true }}
			transition={{ staggerChildren: 0.1 }}
			ref={form}
			onSubmit={sendEmail}
			className={styles.form}>
			<motion.h2 variants={slideInUp} className="en">
				Feel free to contact us
			</motion.h2>
			<motion.p variants={slideInUp} className="mt-sm">
				We’re always happy to hear from anyone interested in working with or for us.
				<br />
				Please use the contact form to get in touch!
			</motion.p>
			<motion.div variants={slideInUp} className="mt-md">
				<label>
					<span className={styles['input-label']}>Your Name</span>
					<span className={styles['input-wrapper']} data-name="name">
						<input type="text" name="name" className="" aria-required="true" aria-invalid="false" />
					</span>
				</label>
			</motion.div>

			<motion.div variants={slideInUp}>
				<label>
					<span className={styles['input-label']}>Your eMail</span>
					<span className={styles['input-wrapper']} data-name="email">
						<input
							type="email"
							name="email"
							className=""
							aria-required="true"
							aria-invalid="false"
						/>
					</span>
				</label>
			</motion.div>

			<motion.div variants={slideInUp}>
				<label>
					<span className={styles['input-label']}>Message</span>
					<span className={styles['input-wrapper']} data-name="message">
						<textarea name="message" cols="40" rows="5" aria-required="true" aria-invalid="false" />
					</span>
				</label>
			</motion.div>
			<motion.button variants={slideInUp} type="submit" value="SEND MESSAGE" className="btn">
				SEND MESSAGE
			</motion.button>
		</motion.form>
	);
};

export default Form;
