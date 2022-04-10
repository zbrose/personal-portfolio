import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (  
        <footer>
            <a 
            target='_blank'
            rel="noreferrer"
            href="'https://www.linkedin.com/in/zach-brose-668a9891/'">
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
            src='/images/github.png'
            alt='linked in logo'
            width={40}
            height={40}
            />
            </a>
            <a 
            target='_blank'
            rel="noreferrer"
            href='https://open.spotify.com/artist/3Tnf72o3WrwrwvNJ1GKsrN?si=hReAyObMRhiB-GT_twU7PQ'>
            <Image 
            src='/images/spotify.png'
            alt='spotify logo'
            width={40}
            height={40}
            />
            </a>
            <a 
            target='_blank'
            rel="noreferrer"
            href='https://zachbrose.bandcamp.com/'>
            <Image 
            src='/images/bandcamp.png'
            alt='bandcamp logo'
            width={40}
            height={40}
            />
            </a>
            <a className='link' href='ZB-Resume-2022.pdf' download>Download Resume</a>
      </footer>

    );
}

export default Footer;