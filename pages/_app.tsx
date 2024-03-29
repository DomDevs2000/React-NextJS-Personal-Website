import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import { createContext, useEffect, useState } from 'react';
import { Footer } from '../components/Footer';

export const ThemeContext = createContext('light');
const defaultTheme = 'light';

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(defaultTheme);
    useEffect(() => {
        const userTheme = window.localStorage.getItem('THEME');
        if (userTheme) {
            setTheme(userTheme);
        }
    }, [theme]);

    return (
        <>
            <div className={theme}>
                <ThemeContext.Provider value={theme}>
                    <NavBar theme={theme} setTheme={setTheme} />
                    <Component {...pageProps} />
                    <Analytics mode={'production'} />
                    <Footer></Footer>
                </ThemeContext.Provider>
            </div>
        </>
    );
}

export default MyApp;
