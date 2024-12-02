import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (  
        <footer>
            <a 
            target='_blank'
            rel="noreferrer"
            href="https://www.linkedin.com/in/zachary-manning-brose-668a9891/">
            <Image 
            src='/images/linked.png'
            alt='linked in logo'
            width={40}
            height={40}
            />
            </a>
            <a 
            target='_blank'
            rel="noreferrer"
            href='https://github.com/zbrose'>
            <Image 
            src='/icons/cgithub.png'
            alt='linked in logo'
            width={40}
            height={40}
            />
            </a>
            <a className='link' href='ZMB-Resume.pdf' download>Download Resume</a>
      </footer>

    );
}

export default Footer;