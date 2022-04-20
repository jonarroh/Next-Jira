import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { UIContext, UIProvider } from '../context/ui';
import { useContext } from 'react';
import { EntriesProvider } from '../context/entries';

function MyApp({ Component, pageProps }: AppProps) {
	const { sidemenuOpen } = useContext(UIContext);
	return (
		<EntriesProvider entries={[]}>
			<UIProvider sidemenuOpen={sidemenuOpen}>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</UIProvider>
		</EntriesProvider>
	);
}

export default MyApp;
