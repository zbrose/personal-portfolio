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
				<h1 style={{ marginTop: '0px' }}>About me</h1>

				<p>
					I&#39;m a frontend engineer specializing in scalable enterprise
					applications, reusable component libraries, and UI optimization to elevate
					user experience and application performance.
				</p>

				<p>
					Before transitioning into software development in 2022, I spent over a
					decade as a professional musician—performing, recording, and teaching. I
					see a deep connection between music and software development, particularly
					in areas such as pattern recognition and the importance of solid
					architecture—whether in composing a song or writing code. This unique
					perspective helps me approach development problems with creativity,
					confidence, and an openness to innovative solutions.
				</p>

				<p>
					I&#39;m experienced in implementing designs using JavaScript frameworks
					such as Angular, React, Vue, and Next.js, while also building component
					libraries that help businesses streamline their development practices. One
					of my most recent projects involves integrating Contentstack&#39;s headless
					CMS with a custom React component library to create a low-code solution for
					building dynamic digital experiences. In my previous role as a software
					consultant, I was often tasked with quickly learning new tools and
					technologies to provide expert recommendations and develop long-lasting
					solutions. This fast-paced environment has helped me become highly
					adaptable and self-motivated, always eager to tackle new challenges.
				</p>

				<h1>Skills</h1>
				<div className="flex-box">{renderImages}</div>
			</div>
		</section>
	);
}
