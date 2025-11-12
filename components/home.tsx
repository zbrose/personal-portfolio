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
					I&#39;m a fullstack software developer specializing in UI modernizations,
					optimizations, and reusable component libraries to elevate user experience
					and application performance.
				</p>
				<p>
					Before transitioning into software development, I spent over a decade as a
					professional musician; performing, recording, and teaching. I&#39;m
					interested in the intersection between technology and music, and building
					communal platforms where musicians can share their work freely and be
					compensated fairly. I&#39;m passionate about building software and tools
					that are purpose-driven, widely accessible, and sustainable.
				</p>
				<h1>skills</h1>
				<hr />
				<div className="skills-box">
					<div>
						<h4>frontend</h4>
						<ul>
							<li>frontend frameworks (react, angular, vue, next)</li>
							<li>typescript</li>
							<li>stying (css, sass, tailwind)</li>
							<li>accessibility</li>
							<li>testing (jest, cypress, playwright)</li>
						</ul>
					</div>
					<div>
						<h4>backend</h4>
						<ul>
							<li>node/express</li>
							<li>python</li>
							<li>relational databases (postgresql)</li>
							<li>non-relational databases (mongoDB)</li>
							<li>exposure to .NET, java/springboot</li>
						</ul>
					</div>
					<div>
						<h4>tools & methodologies</h4>
						<ul>
							<li>git</li>
							<li>storybook</li>
							<li>jira, azure devops, confluence</li>
							<li>agile, scrum</li>
							<li>ci/cd</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
