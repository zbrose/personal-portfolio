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
				linkedIn
			</Link>

			<Link target="_blank" rel="noreferrer" href="https://github.com/zbrose">
				github
			</Link>

			<Link href="/zmb-resume.pdf" download aria-label="Download resume PDF">
				download resume
			</Link>
		</footer>
	);
}

export default Footer;
