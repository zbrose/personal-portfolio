'use client';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	return (
		<footer>
			<Link
				target="_blank"
				rel="noreferrer"
				href="https://www.linkedin.com/in/zachary-manning-brose-668a9891/"
			>
				LinkedIn
			</Link>

			<Link target="_blank" rel="noreferrer" href="https://github.com/zbrose">
				Github
			</Link>

			<Link className="link" href="zmb-tech-resume.pdf" download>
				Download Resume
			</Link>
		</footer>
	);
}

export default Footer;
