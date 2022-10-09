import type { NextPage } from 'next';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

const Home: NextPage = () => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>Aidan C</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between dark:text-white'>
						<h1 className=''>Aidan C</h1>
						<ul className='flex items-center'>
							<li>
								<a
									id='projects'
									className='bg-blue-700  hover:bg-blue-200 delay-100 text-white px-4 py-2  rounded-md ml-8'
									href='#projects'
								>
									Projects
								</a>
							</li>
							<li>
								<a
									className='bg-blue-700 hover:bg-blue-200 delay-100 text-white px-4 py-2  rounded-md ml-8'
									href='#projects'
								>
									Contact Me
								</a>
							</li>
							<li>
								<button className='ml-8 px-4 py-2'>
									<BsFillMoonStarsFill
										onClick={() => setDarkMode(!darkMode)}
										className='cursor-pointer text-2xl'
									/>
								</button>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10 dark:text-white'>
						<h2 className='text-5xl text-gray-700 py-2 text-grey-800 md:text-6xl'>
							Aidan Carvalho
						</h2>
						<h3 className='text-2xl'>Junior Full-Stack Developer</h3>
						<p className='text-md py-5 leading-8 text-gray md:text-xl max-w-lg mx-auto'>
							About me text here
						</p>
					</div>
					<div className='text-5xl flex justify-center gap-12 py-3'>
						<a href='#'>
							<AiFillLinkedin />
						</a>
						<a href='https://github.com/AidanC2000'>
							<AiFillGithub />
						</a>
					</div>
				</section>
				<section>
					<div>
						<h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
					</div>
				</section>
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
