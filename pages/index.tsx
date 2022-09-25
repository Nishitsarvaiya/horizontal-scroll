import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { Footer, GalleryItem, Header } from '../components';
import { images } from '../lib/imageData';
import { TimelineDefinition } from '@motionone/dom/types/timeline/types';
import { timeline } from 'motion';

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
	};
};

const getSectionHeight = (el: HTMLUListElement) => {
	const { height } = el.getBoundingClientRect();
	const { childElementCount } = el;
	return height / childElementCount;
};

const Home: NextPage = () => {
	const countRef = useRef<HTMLUListElement | null>(null);
	const countRef2 = useRef<HTMLUListElement | null>(null);
	const countListRef = useRef<HTMLDivElement | null>(null);
	const countListRef2 = useRef<HTMLDivElement | null>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const loaderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (countRef.current && countRef2.current) {
			const transformAmount = getSectionHeight(countRef.current);

			const sequence1: TimelineDefinition = new Array(3).fill('').flatMap((_, idx) => [
				[countRef.current, { y: `-${transformAmount * (idx + 1)}px` }],
				[countRef2.current, { y: `-${transformAmount * (idx + 1)}px` }, { at: '-1.4' }],
				[countListRef.current, { y: `-${transformAmount * (idx + 1)}px` }, { at: '-1.4' }],
				[countListRef2.current, { y: `-${transformAmount * (idx + 1)}px` }, { at: '-1.4' }],
			]) as TimelineDefinition;

			timeline(sequence1, { defaultOptions: { duration: 1.5, easing: [0.76, 0, 0.24, 1] } });
		}
	}, []);

	useEffect(() => {
		const sequence2: TimelineDefinition = [
			[titleRef.current, { y: 100 }],
			[imageRef.current, { scale: 1.2 }, { at: '<' }],
			[countRef.current, { opacity: 0 }, { at: '<' }],
			[countRef2.current, { opacity: 0 }, { at: '<' }],
			[loaderRef.current, { y: '-100vh' }, { at: '-0.75' }],
			[titleRef.current, { y: 0 }, { at: '-0.75' }],
			[imageRef.current, { scale: 1 }, { at: '<' }],
		] as TimelineDefinition;

		timeline(sequence2, {
			defaultOptions: { easing: [0.76, 0, 0.24, 1], duration: 1.5, delay: 4.5 },
		});
	}, []);

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
			<div className='loader-container' ref={loaderRef}>
				<div className='counter-container' ref={countListRef}>
					<ul className='counter-list' ref={countRef}>
						<li>
							<h3>2</h3>
						</li>
						<li>
							<h3>4</h3>
						</li>
						<li>
							<h3>6</h3>
						</li>
						<li>
							<h3>9</h3>
						</li>
					</ul>
				</div>
				<div className='counter-container' ref={countListRef2}>
					<ul className='counter-list' ref={countRef2}>
						<li>
							<h3>6</h3>
						</li>
						<li>
							<h3>2</h3>
						</li>
						<li>
							<h3>7</h3>
						</li>
						<li>
							<h3>8</h3>
						</li>
					</ul>
				</div>
			</div>
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
