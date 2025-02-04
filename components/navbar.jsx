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
				</div>
				<div></div>
				<div>
					<Link href="/" className={pathname == '/' ? 'active' : ''}>
						home
					</Link>
					<Link href="/projects" className={pathname == '/projects' ? 'active' : ''}>
						code
					</Link>
					{/* <Link
						href="https://www.zachbrose.com"
						target="_blank"
						className={pathname == '/music' ? 'active' : ''}
					>
						music
					</Link> */}
					<Link href="/contact" className={pathname == '/contact' ? 'active' : ''}>
						contact
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
