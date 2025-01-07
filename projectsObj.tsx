export const projects = [
	{
		id: 5,
		image: 'whosshows.png',
		title: "Who's Show (2022)",
		description:
			'Whos Shows is a simple MERN stack application created for users to share concerts and events in one place. I created this application because I wanted one location to find local events shared by friends of mine without the bloat of social media. Instead of scrolling past an advertisement, a cat picture and a meme, my friends and I can find and upload shows with each other directly.',
		links: [
			'https://62b64b4ff345050678b44cd2--friendly-trifle-312cf7.netlify.app/',
			'https://github.com/zbrose/LA-client',
			'https://github.com/zbrose/whosshow-server',
		],
		tech: ['React', 'Express', 'MongoDb', 'CSS'],
	},
	{
		id: 4,
		image: 'party-people.png',
		title: 'Party People (2022)',
		description:
			'Party people is an app designed with the gathering in mind. A MERN Stack appplication that allows users to create events as well as find and attend other users events. Users can upload event details with images using cloudinary and use geolocation to find where an event is happening.',
		links: [
			'https://party-people-app.netlify.app/',
			'https://github.com/zbrose/party-people-client',
			'https://github.com/zbrose/party-people-server-1',
		],
		tech: ['React', 'Express', 'MongoDb', 'CSS'],
	},
	{
		id: 3,
		image: 'side-side.png',
		title: 'Side by Side (2022)',
		description:
			'Side-Side is a music database and organization app in which a user can get information on recordings by artist name, record title, or song title using the Discogs Api. Users may view an albums information such as credits and track listing. Users are also able to bookmark and categorize records, adding them to a want-list or their growing collection.',
		links: [
			'https://side-side.herokuapp.com/',
			'https://github.com/zbrose/side-side',
		],
		tech: ['JavaScript', 'Express', 'CSS', 'HTML', 'PostgreSQL'],
	},
	{
		id: 2,
		image: 'song-birds-finished.png',
		title: 'Song Birds (2022)',
		description:
			'Song Birds is an educational music game that helps you improve your ear for melodies. The player is able to control five birds, each one assigned a single musical note that sounds when you select a bird at the bottom of the screen. The object of the game is to listen to a playback of a melody and match the melody using your birds beautiful singing voices and your own ears.',
		links: [
			'https://zbrose.github.io/song-birds/',
			'https://github.com/zbrose/song-birds',
		],
		tech: ['JavaScript', 'HTML', 'CSS'],
	},
	{
		id: 1,
		image: 'Petit-ami-artwork.png',
		title: 'Petit Ami (2022)',
		description:
			'Petit Ami is an iOS real-time pocket monster app created in Xcode using Swift. Users are able to adopt therir very own Ami companion which they can feed, play mini games with, and evolve',
		links: ['', 'https://github.com/zbrose/petit-ami-upstream'],
		tech: ['Swift', 'MongoDb'],
	},
];
