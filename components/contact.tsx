//@ts-ignore
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_d2ys1mi',
				'template_wz4bg58',
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
