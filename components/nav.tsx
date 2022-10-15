import React, { FC, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Link from 'next/link';

type NavProp = {
	theme: boolean;
	setTheme: (theme: boolean) => void;
};

const Nav: FC<NavProp> = ({ theme, setTheme }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<section className='max-h-600 '>
			<div className='flex items-center justify-between border-b border-gray-400 py-8'>
				<h1 className='dark:text-white'>Aidan C</h1>
				<button className='ml-8 px-4 py-2'>
					<BsFillMoonStarsFill
						color='gray'
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
									<Link href='/projects'>Projects </Link>
								</li>
								<li className='border-b border-gray-400 my-8 uppercase '>
									<Link href='/contact'>Contact Me</Link>
								</li>
								<li className='border-b border-gray-400 my-8 uppercase'>
									<Link href='/blog'>Blog</Link>
								</li>
							</ul>
						</div>
					</section>

					<ul className='DESKTOP-MENU hidden space-x-8 lg:flex dark:text-white'>
						<li className='hover:underline'>
							<Link href='/projects'>Projects </Link>
						</li>
						<li className='hover:underline'>
							<Link href='/contact'>Contact</Link>
						</li>
						<li className='hover:underline'>
							<a href='/blog'>Blog</a>
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
		</section>
	);
};

export default Nav;
