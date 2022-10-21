import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { createContext } from 'react';
export const ThemeContext = createContext('light');

function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useState('light');
	return (
		<>
			<div className={theme}>
				<ThemeContext.Provider value={theme}>
					<NavBar theme={theme} setTheme={setTheme} />
					<Component {...pageProps} />
				</ThemeContext.Provider>
			</div>
		</>
	);
}

export default MyApp;
