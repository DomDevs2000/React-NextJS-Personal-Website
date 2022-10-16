import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/nav';
import { useState } from 'react';
import { createContext } from 'react';
export const ThemeContext = createContext('light');

function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useState('light');
	return (
		<>
			<ThemeContext.Provider value={theme}>
				<Nav theme={theme} setTheme={setTheme} />
				<Component {...pageProps} />
			</ThemeContext.Provider>
		</>
	);
}

export default MyApp;
