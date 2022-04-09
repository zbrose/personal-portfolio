import '../styles/globals.css'
import Navbar from '../components/navbar'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
       <Component {...pageProps} />  
      </main>

      <footer>
        footer
      </footer>

    </>
  )
}

export default MyApp
