import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e: any) => {
		e.preventDefault();
		if (!form.current) {
			return;
		}
		emailjs
			.sendForm(
				'service_7catqb7',
				'template_k1fhr6b',
				form.current,
				'j04K1l6HIpl3x2O1z'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form>
			<label>Name:</label>
			<input type='text' name='user_name' />
			<label>Email</label>
			<input type='email' name='user_email' />
			<label>Message</label>
			<textarea name='message' />
			<input type='submit' value='Send' />
		</form>
	);
};

export default Contact;
