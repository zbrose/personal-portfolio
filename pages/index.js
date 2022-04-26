import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Zach Brose</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className='aside'>
        <div className='small-container'>
          <div className='profile-pic-wrapper'>
            <Image
              src='/images/zach2.jpg'
              alt='a pic of zach brose'
              width={500}
              height={625}
            />   
          </div>
        </div>
        <div className='small-container'>
            <h1>About Me</h1>
            <p>I&apos;m a musician and software engineer living in Los Angeles, CA  </p>  

            <p>I&apos;ve been a musician for over ten years now playing, producing and performing with a wide range of artists.  My favorite part of being a musician is collaborating with other artists to create something better than I could on my own while learning from each other in the process.  After getting into software engineering, I realized how much these two fields have in common.  I see a team of engineers as a sort of musical group; playing, tinkering and even improvising to creatively and efficiently solve problems. </p>

            <p> As a musician, I&apos;ve learned to adapt to whatever a situation throws at me while collaborating with others to bring projects to life. I bring the same adaptability and team-oriented skill-set into software engineering where I strive to find creative and efficient solutions to complex problems. I&apos;m passionate about creating products that are accessible, innovative and impactful in our daily lives.</p>

          <h1>Technologies</h1>
          <div className='flex-box'>
            <div className='img-wrapper'><Image src='/images/javascript.png' alt='the javascript logo' width={60} height={60}/></div>
            <div className='img-wrapper'> <Image src='/images/python.png' alt='the python logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/html5.png' alt='the html 5 logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/css3.png' alt='the css3 logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/node-js.png' alt='the node js logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/react.png' alt='the react logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/express.png' alt='the express logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/mongodb (1).png' alt='the mongodb logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/postgresql.png' alt='the postgres logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/nextjs.png' alt='the next js logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/swift.png' alt='the swift logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/github.png' alt='the github logo' width={60} height={60}/></div>
            <div className='img-wrapper'><Image src='/images/bootstrap.png' alt='the bootstrap logo' width={60} height={60}/></div>
          </div>
        </div>
      </section>
    </div>
  )
}
