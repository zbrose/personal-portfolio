'use client';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
	title: string;
	description: string;
	links: string[];
	tech: string[];
	image: string;
}

function Project(props: Project) {
	const { title, description, links, tech, image } = props;

	const techList = tech.map((tech) => {
		return <li key={tech}>{tech}</li>;
	});

	return (
		<div className="project-container">
			<div className="img-container">
				<Image
					src={`/images/${image}`}
					alt={`screenshot of ${title}`}
					fill
					sizes="(min-width: 1220px) 311px, 1000px"
				/>
			</div>
			<div className="content-container">
				<h2 className="subheader">
					<Link className="project-link" href={links[0]} target="_blank">
						{title}
					</Link>
				</h2>
				<p>{description}</p>
				<h4>Tech Used:</h4>
				<ul className="tech-list">{techList}</ul>
			</div>
		</div>
	);
}

export default Project;
