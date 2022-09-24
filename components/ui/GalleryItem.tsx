import { FunctionComponent } from 'react';
import { points } from '../../lib/imageData';

type Props = {
	src: string;
	idx: number;
	columnOffset: number;
};

const GalleryItem: FunctionComponent<Props> = ({ src, idx, columnOffset }) => {
	const coordinates = points[idx];
	if (!coordinates) return null;
	const [row, column, spanRow, spanColumn] = coordinates;

	const getScrollSpeed = () => {
		if (idx === 1 || idx === 4) return -1;
		if (idx === 0 || idx === 3) return 1;
		return 0;
	};

	return (
		<div
			className='gallery-item'
			data-scroll
			data-scroll-speed={getScrollSpeed()}
			style={{
				gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn}`,
			}}>
			<div className='gallery-item-image'>
				<div className='gallery-item-image-inner' style={{ backgroundImage: `url(${src})` }}></div>
			</div>
		</div>
	);
};

export default GalleryItem;
