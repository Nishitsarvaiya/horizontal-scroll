import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Footer, GalleryItem, Header } from '../components';
import { images } from '../lib/imageData';

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
	};
};

const Home: NextPage = () => {
	const gallery = images.map((batch, idx) =>
		batch.map((image, imageIdx) => (
			<GalleryItem src={image} idx={imageIdx} key={imageIdx} columnOffset={idx * 14} />
		))
	);

	return (
		<>
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
				<div className='scroll-container' data-scroll-container>
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
		</>
	);
};

export default Home;
