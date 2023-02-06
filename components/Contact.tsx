import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Contact Me
                    </h5>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Email:
                        </label>
                        <input
                            type="email"
                            name="from_name"
                            id="from_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your Message:
                        </label>
                        <input
                            id="message"
                            name="message"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        id="button"
                        value="Send Email"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Send Email
                    </button>
                </form>
            </div>
        </>
        // {/*<div className="md:flex md:items-center mb-6">*/
        // }
        // {/*    <div>*/
        // }
        // {/*        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">*/
        // }
        // {/*            Email*/
        // }
        // {/*        </label>*/
        // }
        // {/*    </div>*/
        // }
        // {/*    <div>*/
        // }
        // {/*        <input*/
        // }
        // {/*            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"*/
        // }
        // {/*            id="from_name"*/
        // }
        // {/*            name="from_name"*/
        // }
        // {/*            type="email"*/
        // }
        // {/*            placeholder="Your Email Here"*/
        // }
        // {/*            required*/
        // }
        // {/*        />*/
        // }
        // {/*    </div>*/
        // }
        // {/*</div>*/
        // }
        // {/*<div className="md:flex md:items-center mb-6">*/
        // }
        // {/*    <div>*/
        // }
        // {/*        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">*/
        // }
        // {/*            Message*/
        // }
        // {/*        </label>*/
        // }
        // {/*    </div>*/
        // }
        // {/*    <div>*/
        // }
        // {/*        <textarea*/
        // }
        // {/*            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"*/
        // }
        // {/*            id="message"*/
        // }
        // {/*            name="message"*/
        // }
        // {/*            placeholder="Your Message Here"*/
        // }
        // {/*        />*/
        // }
        // {/*    </div>*/
        // }
        // {/*</div>*/
        // }
        //
        // {/*<div className="md:flex md:items-center">*/
        // }
        // {/*    <div className=""></div>*/
        // }
        // {/*    <div className="">*/
        // }
        // {/*        <button*/
        // }
        // {/*            className="shadow cursor-pointer  text-black dark:bg-white bg-gray-600 dark:hover:bg-gray-600 hover:bg-gray-200 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"*/
        // }
        // {/*            type="submit"*/
        // }
        // {/*            id="button"*/
        // }
        // {/*            value="Send Email"*/
        // }
        // {/*        >*/
        // }
        // {/*            Send Email*/
        // }
        // {/*        </button>*/
        // }
        // {/*    </div>*/
        // }
        // {/*</div>*/}
    );
};
