import Link from 'next/link';
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const  AboutMe = () => {
    return (
<>
        <div className='text-center px-10 py-5 dark:text-white'>
            <h2 className='text-5xl text-gray-700 py-3 dark:text-slate-400 md:text-6xl'>
                Aidan Dominic Carvalho
            </h2>
            <h3 className='text-2xl'>Junior Full Stack Developer</h3>
            <p className='text-md py-2 leading-8 text-gray md:text-xl max-w-lg mx-auto'>
                Programming enthusiast with experience in design,
                testing and implementation. Equipped with a diverse
                skill-set and experience with development tools and
                procedures. Take a look at my projects or click the
                icons to view my GitHub or Linkedin!
            </p>
        </div>

        <div className='text-5xl flex justify-center gap-12'>
            <Link href='https://www.linkedin.com/in/aidan-carvalho/'>
                <AiFillLinkedin
                    color='gray'
                    className=' hover:-translate-y-1 transition-transform cursor-pointer'
                />
            </Link>
            <Link href='https://github.com/DomDevs2000'>
                <AiFillGithub color='gray'
                              className='hover:-translate-y-1 transition-transform cursor-pointer' />
            </Link>
        </div>
    </>
        )
}