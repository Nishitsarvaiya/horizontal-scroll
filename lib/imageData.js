const images = [
	[
		'https://images.unsplash.com/photo-1663979747290-57d502e9b63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1940&q=80',
		'https://images.unsplash.com/photo-1663983764047-2b1d5f599714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		'https://images.unsplash.com/photo-1663942465104-f6f4d7774472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		'https://images.unsplash.com/photo-1663947010000-3096c03d5ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80',
		'https://images.unsplash.com/photo-1663945631589-d673f6ade2b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
	],
	[
		'https://images.unsplash.com/photo-1663942465105-149dd1eb8a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		'https://images.unsplash.com/photo-1663711935287-4a7323fea555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80',
		'https://images.unsplash.com/photo-1663856542320-639f788ac5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
		'https://images.unsplash.com/photo-1663817132267-1f94026b112b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
		'https://images.unsplash.com/photo-1663699916826-7af23b0ea6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
	],
	[
		'https://images.unsplash.com/photo-1663322398051-2a7f43ae38d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
		'https://images.unsplash.com/photo-1663705253939-99a27f2c5d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
		'https://images.unsplash.com/photo-1663704399456-de719a56fc09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		'https://images.unsplash.com/photo-1663659515592-bd9f8a87fdb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		'https://images.unsplash.com/photo-1662855803469-e37721834a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
	],
	[
		'https://images.unsplash.com/photo-1663652010369-ec8e927f9da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		'https://images.unsplash.com/photo-1663524789622-e23bb37ee7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		'https://images.unsplash.com/photo-1663529472757-6a4a74baec5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
		'https://images.unsplash.com/photo-1663732218961-3f573c37f684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		'https://images.unsplash.com/photo-1663550910324-510f63b1d453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
	],
];

const points = [
	[11, 2, 12, 2],
	[18, 6, 7, 1],
	[29, 5, 12, 3],
	[16, 10, 13, 3],
	[30, 14, 5, 2],
];

export { images, points };
