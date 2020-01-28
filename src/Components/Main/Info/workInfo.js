const workInfo = [
	{
		id          : 1,
		name        : 'Glass Icon: Code Generator',
		description :
			'This was a fun little project I created to generate the code (HTML & CSS) for an an animated UI Glass icon.',
		tags        : [
			'React',
			'Javascript',
			'UI/UX',
			'Adobe XD',
		],
		img         :
			'https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/f918f391392625.5e30b0d31b42b.png',
		url         : 'https://www.behance.net/gallery/91392625/Glass-UI-Code-Generator-%28ReactJS-and-AdobeXD%29',
	},
	{
		id          : 2,
		name        : 'Fashion App UI/UX',
		description : 'Prototyping a shopping cart for fashion mobile app.',
		tags        : [
			'Javascript',
			'UI/UX',
			'Adobe XD',
		],
		img         : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6fd79491393123.5e30b1952b637.png',
		url         : 'https://www.behance.net/gallery/91393123/Fashion-App-UIUX',
	},
	{
		id          : 3,
		name        : 'ORB Website - Redesign',
		description :
			'After prototyping the UI/UX on Adobe XD, I adapted the design, using a mobile-first approach, into a ReactJS one-page application and hosted it on GitHub.',
		tags        : [
			'React',
			'Javascript',
			'UI/UX',
			'Adobe XD',
		],
		img         : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ef34d291392227.5e30aff491c27.png',
		url         : 'https://www.behance.net/gallery/91392227/ORB-Website-Redesign',
	},
	{
		id          : 4,
		name        : 'Personal Website - Design and Development (ReactJS and AdobeXD)',
		description :
			'After prototyping the UI/UX on Adobe XD, I adapted the design, using a mobile-first approach, into a ReactJS one-page application and hosted it on GitHub.',
		tags        : [
			'React',
			'Javascript',
			'UI/UX',
			'Adobe XD',
		],
		img         : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2dcfda91391259.5e30ae8e77043.png',
		url         : 'https://www.behance.net/gallery/91391259/Personal-Website-Design-Development',
	},
	{
		id          : 5,
		name        : 'Glass Simulator',
		description :
			'VIVIX, one of the biggest producers of plane glass sheets in Brazil, hired us to creat a simulator for their ne line of UV filtering glass sheets and colored mirrors. We used the Unreal Engine to create the scenes and materials and coded a simple webapp to display the images.',
		tags        : [
			'React',
			'Javascript',
			'UI/UX',
			'3D Modeling',
		],
		img         : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2b98d73263599.5c04843d9bad1.jpg',
		url         : 'https://www.behance.net/gallery/73263599/UV-Glass-Simulator',
	},
	{
		id          : 6,
		name        : 'Painters Logos',
		description :
			'I was thinking to myself one day about how to expand my design boundaries and get out of my confort zone. Eventually, I thought of painting styles and painters personalities and how each of them would have a unique logo, brand or product.',
		tags        : [
			'Branding',
			'Photoshop',
			'Illustrator',
		],
		img         : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf7a6672817913.5bf46df49b691.png',
		url         : 'https://www.behance.net/gallery/72817913/What-If-Painters-Had-Logos',
	},
	{
		id          : 7,
		name        : 'Branding and Logo',
		description :
			'Before being a programmer and game developer I began my carreer as a logo and web designer, here are some of my works.',
		tags        : [
			'Branding',
			'Photoshop',
			'Illustrator',
		],
		img         : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/096b7172465911.5be8dbe41b15b.png',
		url         : 'https://www.behance.net/gallery/72465911/LOGO-BRANDING',
	},
	{
		id          : 8,
		name        : "80's SciFi Poster",
		description :
			"I needed to make a painting to fill a wall in my home office. I wanted it to be inpired by 80's synth album covers and 20's scifi posters.",
		tags        : [
			'Digital Painting',
			'Photoshop',
		],
		img         : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2cd9e081869899.5d0c1c3f906af.png',
		url         : 'https://www.behance.net/gallery/81869899/80s-SciFi-Wall-Poster',
	},
	{
		id          : 9,
		name        : 'VR Solar Workshop',
		description : 'A completely interactive and customizable space working in real time on the Unreal Engine.',
		tags        : [
			'C++',
			'Unreal Engine',
			'Autodesk Maya',
			'Photoshop',
		],
		img         :
			'https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/2d094172465311.5e30aa96d8849.png',
		url         : 'https://www.behance.net/gallery/72465311/VR-Interactive-Solar-Workshop',
	},
	{
		id          : 10,
		name        : 'VR Office Tour',
		description :
			'Decided to create a virtual reality experience of our new office space. The project was created to run in real time using Unreal Engine 4.',
		tags        : [
			'C++',
			'Unreal Engine',
			'Autodesk Maya',
			'Photoshop',
		],
		img         :
			'https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/6c9b3972465057.5e30a9c95858f.jpg',
		url         : 'https://www.behance.net/gallery/72465057/Real-Time-VR-Office-Tour',
	},
	{
		id          : 11,
		name        : 'VR Fantasy Lyric Video',
		description :
			"A nationally recognized band wanted to creat a virtual reality experience for its new comeback single. We created an anaimation using Unreal Engine 4 and Maya and renderd it out so it could be palyed on any device, here's the final product:",
		tags        : [
			'C++',
			'Unreal Engine',
			'Autodesk Maya',
			'Premiere',
		],
		img         :
			'https://mir-cdn.behance.net/v1/rendition/project_modules/1400_opt_1/698afd72464561.5e30a930ebc5a.jpg',
		url         : 'https://www.behance.net/gallery/72464561/VR-Fantasy-Lyric-Video',
	},
	{
		id          : 12,
		name        : 'Grand Soleil - VR',
		description :
			'I was hired to create an interactive VR experience on a new luxury building showing off its various blueprint options and floor plans. Using Unreal Engine 4 we were able to create a run the scene in real time with easy comaptibility with Oculus Rift.',
		tags        : [
			'C++',
			'Unreal Engine',
			'Autodesk Maya',
			'Photoshop',
		],
		img         : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/95c42072464147.5be8a494c26dc.jpg',
		url         : 'https://www.behance.net/gallery/72464147/Grand-Soleil-Real-Time-VR-Experience',
	},
];

export default workInfo;
