import { createContext, FunctionComponent, ReactElement, useEffect, useState } from 'react';

export const LocomotiveScrollContext = createContext({
	scroll: null,
});

type Props = {
	children: React.ReactNode;
	options: Object | null;
};

const LocomotiveScrollProvider: FunctionComponent<Props> = ({ children, options }) => {
	const [scroll, setScroll] = useState<any>(null);

	useEffect(() => {
		if (!scroll) {
			(async () => {
				try {
					const LocomotiveScroll = (await import('locomotive-scroll')).default;

					setScroll(
						new LocomotiveScroll({
							el: document.querySelector('[data-scroll-container]') ?? undefined,
							...options,
						})
					);
				} catch (error) {
					throw Error(`[SmoothScrollProvider]: ${error}`);
				}
			})();
		}

		return () => {
			scroll && scroll.destroy();
		};
	}, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

	return <LocomotiveScrollContext.Provider value={{ scroll }}>{children}</LocomotiveScrollContext.Provider>;
};

export default LocomotiveScrollProvider;
