import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { Footer, GalleryItem, Header } from '../components';
import { images } from '../lib/imageData';

const Home: NextPage = () => {
	const { asPath } = useRouter();
	const containerRef = useRef(null);

	const gallery = images.map((batch, idx) =>
		batch.map((image, imageIdx) => (
			<GalleryItem src={image} idx={imageIdx} key={imageIdx} columnOffset={idx * 14} />
		))
	);

	return (
		<LocomotiveScrollProvider
			options={{ smooth: true, lerp: 0.06, direction: 'horizontal', multiplier: 0.4 }}
			location={asPath}
			containerRef={containerRef}
			onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}>
			<Head>
				<title>Horizontal Scroll | Nishit Sarvaiya</title>
				<meta
					name='description'
					content='Horizontal Scrolling in Nextjs built using Locomotive Scroll & Framer Motion'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className='main-container'>
				<div className='scroll-container' data-scroll-container ref={containerRef}>
					<div className='content'>
						<div className='gallery'>
							{gallery}
							<div className='gallery-helper-text' data-scroll-speed={-7} data-scroll-position='left'>
								Scroll to discover more
							</div>
							<div className='gallery-jumbo fill'>Everybody loves a good story</div>
							<div className='gallery-jumbo outline'>Everybody loves a good story</div>
						</div>
						<Footer />
					</div>
				</div>
			</main>
		</LocomotiveScrollProvider>
	);
};

export default Home;
