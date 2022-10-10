import React, { FC, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
type NavProp = {
	theme: boolean;
	setTheme: (theme: boolean) => void;
};

const Nav: FC<NavProp> = ({ theme, setTheme }) => {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
	return (
		<section className='max-h-600 '>
			<div className='flex items-center justify-between border-b border-gray-400 py-8'>
				<h1 className='dark:text-white'>Aidan C</h1>
				<button className='ml-8 px-4 py-2'>
					<BsFillMoonStarsFill
						onClick={() => setTheme(!theme)}
						className='cursor-pointer text-2xl'
					/>
				</button>
				<nav>
					<section className='MOBILE-MENU flex lg:hidden'>
						<button
							className='HAMBURGER-ICON space-y-2'
							onClick={() => setIsNavOpen((prev) => !prev)}
						>
							<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
							<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
							<span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
						</button>

						<div className={isNavOpen ? 'showMenuNav bg-red' : 'hideMenuNav'}>
							<button
								className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
								onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
							>
								<svg
									className='h-8 w-8 text-gray-600'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<line x1='18' y1='6' x2='6' y2='18' />
									<line x1='6' y1='6' x2='18' y2='18' />
								</svg>
							</button>
							<ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] dark:text-white'>
								<li className='border-b border-gray-400 my-8 uppercase'>
									<a href='/portfolio'>Projects</a>
								</li>
								<li className='border-b border-gray-400 my-8 uppercase '>
									<a href='/contact'>Contact Me</a>
								</li>
								<li className='border-b border-gray-400 my-8 uppercase'>
									<a href='/portfolio'>Blog</a>
								</li>
							</ul>
						</div>
					</section>

					<ul className='DESKTOP-MENU hidden space-x-8 lg:flex dark:text-white'>
						<li className='hover:underline'>
							<a href='/portfolio'>Projects</a>
						</li>
						<li className='hover:underline'>
							<a href='/contact'>Contact</a>
						</li>
						<li className='hover:underline'>
							<a href='/portfolio'>Blog</a>
						</li>
					</ul>
				</nav>
				<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: white;
        
        
      }

      .dark .showMenuNav{
        background-color: rgb(19,24,39)
      }

    `}</style>
			</div>

			<div className='text-center p-10 dark:text-white'>
				<h2 className='text-5xl text-gray-700 py-2 text-grey-800 md:text-6xl'>
					Aidan Dominic Carvalho
				</h2>
				<h3 className='text-2xl'>Junior Full-Stack Developer</h3>
				<p className='text-md py-5 leading-8 text-gray md:text-xl max-w-lg mx-auto'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
					veritatis natus recusandae eligendi, doloremque consectetur voluptate
					tempora quasi ratione itaque totam assumenda dicta ab eaque eum
					eveniet? Illum, consequatur iure.
				</p>
			</div>
			<div className='text-5xl flex justify-center gap-12 py-3'>
				<a href='#'>
					<AiFillLinkedin color='gray' />
				</a>
				<a href='https://github.com/AidanC2000'>
					<AiFillGithub color='gray' />
				</a>
			</div>
		</section>
	);
};

export default Nav;
