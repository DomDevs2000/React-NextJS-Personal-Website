import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//import * as dotenv from 'dotenv';
//
//dotenv.config();
//const { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } = process.env;

export const Contact = () => {
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_z4jp556',
                'template_bjvafnh',
                form.current,
                'korlJ5Z3ahc_tBSQw'
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
        <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="md:flex md:items-center mb-6">
                <div>
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Email
                    </label>
                </div>
                <div>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="from_name"
                        name="from_name"
                        type="email"
                        placeholder="Your Email Here"
                        required
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div>
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Message
                    </label>
                </div>
                <div>
                    <textarea
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="message"
                        name="message"
                        placeholder="Your Message Here"
                    />
                </div>
            </div>

            <div className="md:flex md:items-center">
                <div className=""></div>
                <div className="">
                    <button
                        className="shadow cursor-pointer bg-violet-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        id="button"
                        value="Send Email"
                    >
                        Send Email
                    </button>
                </div>
            </div>
        </form>
    );
};
