// built in link for SSR Op and SEO from next
import Link from 'next/link'
import { useRouter } from 'next/router';


function Navbar() {
    const router = useRouter();
    return ( 
        <>
            <nav>
                <div>
                    <h1 className='header'>Zachary Manning-Brose</h1>
                    <h4 className='subheader'>Software Engineer</h4>
                </div>
                <div></div>
                <div>
                    <Link href='/'><a className={router.pathname == "/" ? "active" : ""}>Home</a></Link>
                    <Link href='/projects'><a className={router.pathname == "/projects" ? "active" : ""}>Projects</a></Link>
                    <Link href='/contact'><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link>
                </div>
            </nav>
        </>
     );
}

export default Navbar;