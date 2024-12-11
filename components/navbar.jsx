'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Navbar() {
	const router = useRouter();
	return (
		<>
			<nav>
				<div>
					<h1 className="header">Zachary Manning-Brose</h1>
					<h4 className="subheader">Software Engineer</h4>
				</div>
				<div></div>
				<div>
					<Link href="/" className={router.pathname == '/' ? 'active' : ''}>
						Home
					</Link>
					<Link
						href="/projects"
						className={router.pathname == '/projects' ? 'active' : ''}
					>
						Projects
					</Link>
					<Link
						href="/contact"
						className={router.pathname == '/contact' ? 'active' : ''}
					>
						Contact
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
