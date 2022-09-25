import type { AppProps } from 'next/app';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../styles/app.scss';
import LocomotiveScrollProvider from '../contexts/LocomotiveScrollProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LocomotiveScrollProvider options={{ smooth: true, lerp: 0.06, direction: 'horizontal', multiplier: 0.4 }}>
			<Component {...pageProps} />
		</LocomotiveScrollProvider>
	);
}

export default MyApp;
