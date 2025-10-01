import { deprecate } from 'util';

export const projects = [
	{
		id: 7,
		image: 'king-pari.png',
		title: 'King Pari Webpage',
		description:
			'A super simple webpage I made for the band King Pari.  Links to their work and a mailing list service inlcuded.',
		links: ['https://kingparimusic.com'],
		tech: ['javascript', 'css', 'html'],
		active: false,
	},
	{
		id: 6,
		image: 'music-website.png',
		title: 'Personal Music Website',
		description:
			'A website displaying my past music projects.  Developed using Next.js and styled using SCSS.  A great place to find out what I work on the side, complete with links to my bandcamp, spotify, and social media pages where you can follow along on my music journey! ',
		links: ['https://zachbrose.com'],
		tech: ['next.js', 'sass'],
		active: false,
	},
	{
		id: 5,
		image: 'whosshows.png',
		title: 'SoCal Show Cal (2022)',
		description:
			'SoCal Show Cal is a simple MERN stack application created for users to share concerts and events in one place. I created this application because I wanted one location to find local events shared by friends of mine without the bloat of social media. Instead of scrolling past an advertisement, a cat picture and a meme, my friends and I can find and upload shows with each other directly.',
		links: [
			'https://socalshowcal.netlify.app/',
			'https://github.com/zbrose/LA-client',
			'https://github.com/zbrose/whosshow-server',
		],
		tech: ['react', 'express', 'mongodb', 'css'],
		active: true,
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
		tech: ['react', 'express', 'mongodb', 'css'],
		active: false,
	},
	{
		id: 3,
		image: 'side-side.png',
		title: 'Side by Side (2022)',
		description:
			'Side-Side is a music database and organization app in which a user can get information on recordings by artist name, record title, or song title using the Discogs Api. Users may view an albums information such as credits and track listing. Users are also able to bookmark and categorize records, adding them to a want-list or their growing collection.',
		links: ['https://github.com/zbrose/side-side'],
		tech: ['JavaScript', 'Express', 'CSS', 'HTML', 'PostgreSQL'],
		active: false,
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
		tech: ['javascript', 'html', 'css'],
		active: false,
	},
	{
		id: 1,
		image: 'Petit-ami-artwork.png',
		title: 'Petit Ami (2022)',
		description:
			'Petit Ami is an iOS real-time pocket monster app created in Xcode using Swift. Users are able to adopt therir very own Ami companion which they can feed, play mini games with, and evolve',
		links: ['https://github.com/zbrose/petit-ami-upstream'],
		tech: ['Swift', 'MongoDb'],
		active: false,
	},
];
