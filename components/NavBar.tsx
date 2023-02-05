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
            <nav className="bg-black">
                <div className="flex items-center justify-between border-b border-white py-8 px-8">
                    <Link href="/">
                        <div className="inline-flex  rounded-md px-4 p-2 text-xl font-bold uppercase tracking-wider text-white hover:cursor-pointer hover:scale-110 hover:bg-gray-600">
                            Dom Devs
                        </div>
                    </Link>

                    <button className="ml-8 px-4 py-2 theme-toggle">
                        <BsFillMoonStarsFill
                            color="white"
                            onClick={() => {
                                const newTheme =
                                    theme === 'light' ? 'dark' : 'light';
                                window.localStorage.setItem('THEME', newTheme);
                                setTheme(newTheme);
                            }}
                            className="cursor-pointer  text-2xl"
                        />
                    </button>
                    <nav>
                        {/*mobile menu code*/}
                        <section className="MOBILE-MENU flex lg:hidden">
                            <button
                                className="HAMBURGER-ICON space-y-2 ml-auto"
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <span className="block h-0.5 w-8  bg-white"></span>
                                <span className="block h-0.5 w-8  bg-white"></span>
                                <span className="block h-0.5 w-8  bg-white"></span>
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
                                        className="CROSS-ICON  text-white absolute top-0 right-0 px-8 py-8"
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        <svg
                                            className="h-8 w-8 text-white"
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
                                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                        <li className="flex px-4 py-2 font-medium text-white rounded-md hover:scale-110 hover:bg-gray-600">
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
                                        <li className="flex px-4 py-2 font-medium text-white  rounded-md  hover:scale-110 hover:bg-gray-600">
                                            <button
                                                onClick={() =>
                                                    setIsNavOpen(false)
                                                }
                                            >
                                                <Link href="/blog">Blog</Link>
                                            </button>
                                        </li>
                                        <li className="flex px-4 py-2 font-medium text-white rounded-md hover:scale-110  hover:bg-gray-600">
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

                        <div className="hidden w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0">
                            <ul className="flex lg:flex-row flex-col space-y-y lg:space-y-0 lg:space-x-2">
                                <li className="flex px-4 py-2 font-medium text-white  rounded-md  hover:scale-110  hover:bg-gray-600">
                                    <Link href="/projects">Projects</Link>
                                </li>
                                <li className="flex px-4 py-2 font-medium text-white  rounded-md  hover:scale-110  hover:bg-gray-600">
                                    <Link href="/blog">Blog</Link>
                                </li>

                                <li className="flex px-4 py-2 font-medium text-white rounded-md  hover:scale-110  hover:bg-gray-600">
                                    <Link href="/contact">Contact Me</Link>
                                </li>
                            </ul>
                        </div>
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
      .showMenuNav{
        background-color: rgb(0,0,0)
      }
    `}</style>
                </div>
            </nav>
        </div>
    );
};

    /*<nav className="bg-blue-700" >*/
{
    /*    <div className="container flex flex-wrap py-2 mx-auto">*/
}
{
    /*        <Link href="/">*/
}
{
    /*            <div className="inline-flex  px-4 p-2 text-xl font-bold uppercase tracking-wider text-white">*/
}
{
    /*                Dom Devs*/
}
{
    /*            </div>*/
}
{
    /*        </Link>*/
}

{
    /*        <button className=" CROSS-ICON lg:hidden inline-flex items-center justify-center  text-white border h-10 w-10 rounded-md outline-none focus:outline-none ml-auto"*/
}

{
    /*                onClick={() => setIsNavOpen((prev) => !prev)}*/
}

{
    /*                >*/
}
{
    /*            <svg*/
}
{
    /*                xmlns="http://www.w3.org/2000/svg"*/
}
{
    /*                fill="none"*/
}
{
    /*                viewBox="0 0 24 24"*/
}
{
    /*                strokeWidth={1.5}*/
}
{
    /*                stroke="currentColor"*/
}
{
    /*                className="w-6 h-6"*/
}
{
    /*            >*/
}
{
    /*                <path*/
}
{
    /*                    strokeLinecap="round"*/
}
{
    /*                    strokeLinejoin="round"*/
}
{
    /*                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"*/
}
{
    /*                />*/
}
{
    /*            </svg>*/
}
{
    /*        </button>*/
}
{
    /*    </div>*/
}
{
    /*    <div className="MENU-LINK-MOBILE-OPEN w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0">*/
}
{
    /*        <ul className="flex lg:flex-row flex-col space-y-y lg:space-y-0 lg:space-x-2">*/
}
{
    /*            <li className="flex px-4 py-2 font-medium text-white  rounded-md hover:bg-blue-800">*/
}
{
    /*                <Link href="/projects">Projects</Link>*/
}
{
    /*            </li>*/
}
{
    /*            <li className="flex px-4 py-2 font-medium text-white  rounded-md hover:bg-blue-800">*/
}
{
    /*                <Link href="/blog">Blog</Link>*/
}
{
    /*            </li>*/
}
{
    /*            <li className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">*/
}
{
    /*                <Link href="/contact">Contact Me</Link>*/
}
{
    /*            </li>*/
}
{
    /*        </ul>*/
}
{
    /*    </div>*/
}
{
    /*</nav>*/
}

//
//     );
// };

export default Nav;
