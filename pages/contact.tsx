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
            <section className="min-h-screen dark:bg-black dark:text-white">
                <div className="flex flex-row justify-center p-20">
                <Contact />
                </div>
            </section>
        </>
    );
};

export default contactPage;
