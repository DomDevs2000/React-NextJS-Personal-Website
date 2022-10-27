// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import * as dotenv from 'dotenv';
// dotenv.config();

// const Contact = () => {
// 	const form = useRef();

// 	const sendEmail = (e: any) => {
// 		e.preventDefault();
// 		if (!form.current) {
// 			return;
// 		}
// 		emailjs
// 			.sendForm
// 			// process.env.SERVICE_ID,
// 			// process.env.TEMPLATE_ID,
// 			// form.current,
// 			// process.env.PUBLIC_KEY
// 			()
// 			.then(
// 				(result) => {
// 					console.log(result.text);
// 				},
// 				(error) => {
// 					console.log(error.text);
// 				}
// 			);
// 	};

// 	return (
// 		<div>
// 			<form className='dark:bg-gray-900'>
// 				<label className='dark:text-white'>Name:</label>
// 				<input type='text' name='user_name' />
// 				<label>Email</label>
// 				<input type='email' name='user_email' />
// 				<label>Message</label>
// 				<textarea name='message' />
// 				<input type='submit' value='Send' />
// 			</form>
// 		</div>
// 	);
// };

// export default Contact;
