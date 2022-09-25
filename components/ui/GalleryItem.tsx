import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { points } from '../../lib/imageData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Image from 'next/image';

type Props = {
	src: string;
	idx: number;
	columnOffset: number;
};

const GalleryItem: FunctionComponent<Props> = ({ src, idx, columnOffset }) => {
	const galleryItemRef = useRef(null);
	const [reveal, setReveal] = useState(false);
	const inView = useIntersectionObserver(galleryItemRef);

	useEffect(() => {
		if (inView) setReveal(inView);
	}, [inView]);

	const coordinates = points[idx];
	if (!coordinates) return null;
	const [row, column, spanRow, spanColumn] = coordinates;

	const getScrollSpeed = () => {
		if (idx === 1 || idx === 4) return -1;
		if (idx === 0 || idx === 3) return 1;
		return 0;
	};

	// const getScrollDelay = () => {
	// 	if (idx === 1 || idx === 4) return -1;
	// 	if (idx === 0 || idx === 3) return 1;
	// 	return 0;
	// };

	return (
		<div
			className='gallery-item'
			data-scroll
			data-scroll-speed={getScrollSpeed()}
			ref={galleryItemRef}
			style={{
				gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn}`,
			}}>
			<div className={`gallery-item-image ${reveal ? 'reveal' : ''}`}>
				<div className='gallery-item-image-inner'>
					<Image src={src} alt='' layout='fill' objectFit='cover' priority quality={100} />
				</div>
			</div>
		</div>
	);
};

export default GalleryItem;
