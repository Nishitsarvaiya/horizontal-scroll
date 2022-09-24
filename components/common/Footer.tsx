import { FunctionComponent } from 'react';

const addresses = [
	{
		town: 'Amsterdam',
		address: 'IJpromenade 1, 1031 KT Amsterdam, Netherlands',
		phone: '+312 058 91400',
		email: 'amsterdam@webunlocked.co',
	},
	{
		town: 'London',
		address: 'Westminster, London SW1A 0AA, United Kingdom',
		phone: '+442 072 468350',
		email: 'london@webunlocked.co',
	},
	{
		town: 'Zürich',
		address: 'Museumstrasse 2, 8001 Zürich, Switzerland',
		phone: '+414 421 86511',
		email: 'zurich@webunlocked.co',
	},
];

const Footer: FunctionComponent = () => {
	return (
		<footer>
			<div
				className='footer'
				data-scroll
				data-scroll-speed={-7}
				style={{
					backgroundImage: `url(https://images.unsplash.com/photo-1594630957561-df0346706d90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
				}}>
				<h2 className='footer-title' data-scroll data-scroll-speed={2} data-scroll-direction='vertical'>
					<div className='footer-title-line' data-scroll data-scroll-speed={-2}>
						LET’S WORK
					</div>
					<div className='footer-title-line' data-scroll data-scroll-speed={2}>
						TOGETHER
					</div>
				</h2>
				{/* <div className='contact-addresses'>
					{addresses.map((info) => (
						<div key={info.town}>
							<h1>{info.town}</h1>
							<div>
								{info.address.split(',').map((element) => (
									<p key={element}>{element}</p>
								))}
							</div>
							<p>{info.phone}</p>
							<p>{info.email}</p>
						</div>
					))}
				</div> */}
			</div>
		</footer>
	);
};

export default Footer;
