import Image from 'next/image'
import styles from '../styles/About.module.css'


function About() {
    return ( 
        <div>
            <h1>about me</h1>
            <p>I'm a musician and software engineer based in Los Angeles, CA.  As a musician, I’ve learned to adapt to whatever a situation throws at me while collaborating with others to bring projects to life. I bring the same adaptability and team-oriented skill-set into software engineering where I strive to find creative and efficient solutions to complex problems.  I’m passionate about creating products that are accessible, innovative and impactful in our daily lives.</p>
            
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