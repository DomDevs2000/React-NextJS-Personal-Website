import React from 'react';
import { Contact } from '../components/contact';

const contactPage = () => {
    return (
        <section className='min-h-screen dark:bg-gray-900 dark:text-white font-semibold text-center '>
            <h1 className='m-15'>Fill In The Form Below And I'll Be In Touch Soon</h1>
            <Contact />
        </section>
    );

};

export default contactPage;
