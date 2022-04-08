import Image from 'next/image'
import styles from '../styles/About.module.css'


function About() {
    return ( 
        <div>
            <h1>about me</h1>

            
            <Image 
                src='/vercel.svg'
                alt='vercel logo'
                width={500}
                height={500}
            />
            
        </div>

     );
}

export default About;