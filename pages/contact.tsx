import React from 'react';
import { Contact } from '../components/Contact';
import { Helmet } from 'react-helmet';

const contactPage = () => {
    return (
        <>
            <Helmet>
                <title>Dom Devs | Contact</title>
                <meta
                    name="Dom Devs"
                    content="Dom Devs blog portfolio projects"
                />
            </Helmet>
            <section className="min-h-screen dark:bg-black dark:text-white font-semibold text-center ">
                <h1 className="m-15">
                    Fill In The Form Below And I&apos;ll Be In Touch Soon
                </h1>
                <Contact />
            </section>
        </>
    );
};

export default contactPage;
