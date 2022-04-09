// built in link for SSR Op and SEO from next
import Link from 'next/link'

function Navbar() {
    return ( 
        <>
            <nav>
                <div>
                    <h1>Zach Brose</h1>
                    <h3>Software Engineer | Musician</h3>
                </div>
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </>
     );
}

export default Navbar;