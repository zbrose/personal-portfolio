'use client';
import Image from 'next/image';

export default function Home({ images }: any) {
	const renderImages = images.map((image, i) => {
		return (
			<div className="img-wrapper" key={i}>
				<Image src={`/icons/${image}`} alt={image} width={40} height={40} />
			</div>
		);
	});

	return (
		<section className="aside">
			<div className="small-container">
				<div className="profile-pic-wrapper">
					<Image
						src="/images/zach3.jpeg"
						alt="a pic of zach brose"
						fill
						sizes="2074px"
						priority
					/>
				</div>
			</div>
			<div style={{ paddingBottom: '5rem' }}>
				<h1 style={{ marginTop: '0px' }}>about me</h1>
				<hr />
				<p>
					I&#39;m a software engineer specializing in UI modernizations and reusable
					component libraries to elevate user experience and application performance.
				</p>
				<p>
					Before transitioning into software development in 2022, I spent over a
					decade as a professional musician—performing, recording, and teaching.
					I&#39;m most interested in the intersection between technology and music,
					and building communal platforms where musicians can share their work freely
					and be compensated fairly. Having grown up with video games, I&#39;m
					excited about the idea of creating interactive multi-media experiences
					someday, marrying aspects of my love for music with immersive worlds
					through code.
				</p>
				<p>
					I&#39;m experienced in implementing designs using JavaScript frameworks
					such as Angular, React, Vue, and Next.js, while also building component
					libraries that help businesses streamline their development practices. One
					of my most recent projects involved integrating Contentstack&#39;s headless
					CMS with a custom React component library to create a low-code solution for
					building dynamic digital experiences. In my previous role as a software
					consultant, I was often tasked with quickly learning new tools and
					technologies to provide recommendations and develop long-lasting solutions.
					This fast-paced environment has helped me become highly adaptable and
					self-motivated.
				</p>
				<h1>skills</h1>
				<hr />
				<div className="skills-box">
					<div>
						<h4>frontend</h4>
						<ul>
							<li>javascript</li>
							<li>typescript</li>
							<li>react</li>
							<li>angular</li>
							<li>vue</li>
							<li>next</li>
							<li>css/sass/tailwind</li>
							<li>semantic html</li>
							<li>jest</li>
						</ul>
					</div>
					<div>
						<h4>backend</h4>
						<ul>
							<li>node</li>
							<li>express</li>
							<li>python</li>
							<li>.net</li>
							<li>java</li>
							<li>springboot</li>
						</ul>
					</div>
					<div>
						<h4>tools & methodologies</h4>
						<ul>
							<li>git</li>
							<li>storybook/ladle</li>
							<li>jira/azure devops</li>
							<li>agile</li>
							<li>ci/cd</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
