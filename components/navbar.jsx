'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function Navbar() {
	const pathname = usePathname();
	return (
		<>
			<nav>
				<div>
					<h1 className="header">Zachary Manning-Brose</h1>
					{/* <h4 className="subheader">Software Engineer</h4> */}
				</div>
				<div></div>
				<div>
					<Link href="/" className={pathname == '/' ? 'active' : ''}>
						Home
					</Link>
					<Link href="/projects" className={pathname == '/projects' ? 'active' : ''}>
						Projects
					</Link>
					<Link href="/contact" className={pathname == '/contact' ? 'active' : ''}>
						Contact
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
