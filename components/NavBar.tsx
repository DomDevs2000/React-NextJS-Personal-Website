import React, { FC, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Link from 'next/link';

type NavProp = {
    theme: string;
    setTheme: (theme: string) => void;
};

const Nav: FC<NavProp> = ({ theme, setTheme }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className={theme}>
            <section className="max-h-600  dark:bg-gray-900  px-10 font-sans">
                <div className="flex items-center justify-between border-b border-gray-400 py-8">
                    <h1 className="uppercase dark:text-white hover:underline hover:scale-105">
                        <Link href="/">
                            <Link href="/">Dom Devs</Link>
                        </Link>
                    </h1>
                    <button className="ml-8 px-4 py-2 theme-toggle">
                        <BsFillMoonStarsFill
                            color="gray"
                            onClick={() => {
                                const newTheme =
                                    theme === 'light' ? 'dark' : 'light';
                                window.localStorage.setItem('THEME', newTheme);
                                setTheme(newTheme);
                            }}
                            className="cursor-pointer text-2xl"
                        />
                    </button>
                    <nav>
                        <section className="MOBILE-MENU flex lg:hidden">
                            <button
                                className="HAMBURGER-ICON space-y-2"
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <span className="block h-0.5 w-8 animate-pulse dark:bg-white bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse dark:bg-white bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse dark:bg-white bg-gray-600"></span>
                            </button>
                            {isNavOpen && (
                                <div
                                    className={
                                        isNavOpen
                                            ? 'showMenuNav'
                                            : 'hideMenuNav'
                                    }
                                >
                                    <button
                                        className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                                    >
                                        <svg
                                            className="h-8 w-8 text-gray-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line
                                                x1="18"
                                                y1="6"
                                                x2="6"
                                                y2="18"
                                            />
                                            <line
                                                x1="6"
                                                y1="6"
                                                x2="18"
                                                y2="18"
                                            />
                                        </svg>
                                    </button>
                                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] dark:text-white">
                                        <li className="border-b border-gray-400 my-8 uppercase">
                                            <button
                                                onClick={() =>
                                                    setIsNavOpen(false)
                                                }
                                            >
                                                <Link href="/projects">
                                                    Projects
                                                </Link>
                                            </button>
                                        </li>
                                        <li className="border-b border-gray-400 my-8 uppercase ">
                                            <button
                                                onClick={() =>
                                                    setIsNavOpen(false)
                                                }
                                            >
                                                <Link href="/blog">Blog</Link>
                                            </button>
                                        </li>
                                        <li className="border-b border-gray-400 my-8 uppercase">
                                            <button
                                                onClick={() =>
                                                    setIsNavOpen(false)
                                                }
                                            >
                                                <Link href="/contact">
                                                    Contact
                                                </Link>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </section>

                        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex dark:text-white">
                            <li className="hover:scale-125 delay-100 ">
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li className="hover:scale-125 delay-100 ">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className="hover:scale-125 delay-100 ">
                                <Link href="/contact">Contact</Link>
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
        </div>
    );
};

export default Nav;
