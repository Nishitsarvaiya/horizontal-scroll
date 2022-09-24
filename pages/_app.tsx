import type { AppProps } from 'next/app';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
