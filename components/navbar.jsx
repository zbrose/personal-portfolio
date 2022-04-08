// built in link for SSR Op and SEO from next
import Link from 'next/link'

function Navbar() {
    return ( 
        <nav>
            <Link href='/'>
                Home
            </Link>
            <Link href='/about'>
                About
            </Link>
        </nav>
     );
}

export default Navbar;