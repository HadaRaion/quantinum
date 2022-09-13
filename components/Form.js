import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// styles
import styles from '../styles/Form.module.scss';

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
		<form ref={form} onSubmit={sendEmail} className={styles.form}>
			<h2 className="en">Feel free to contact us</h2>
			<p className="mt-sm">
				We’re always happy to hear from anyone interested in working with or for us.
				<br />
				Please use the contact form to get in touch!
			</p>
			<div className="mt-md">
				<label>
					<span className={styles['input-label']}>Your Name</span>
					<span className={styles['input-wrapper']} data-name="name">
						<input type="text" name="name" className="" aria-required="true" aria-invalid="false" />
					</span>
				</label>
			</div>

			<div>
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
			</div>

			<div>
				<label>
					<span className={styles['input-label']}>Message</span>
					<span className={styles['input-wrapper']} data-name="message">
						<textarea name="message" cols="40" rows="5" aria-required="true" aria-invalid="false" />
					</span>
				</label>
			</div>
			<button type="submit" value="SEND MESSAGE" className="btn">
				SEND MESSAGE
			</button>
		</form>
	);
};

export default Form;
