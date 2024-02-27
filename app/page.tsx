import Navbar from '@/app/navbar/page';
import Link from 'next/link';
import '../app/globals.css';
import Footer from './footer/page';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className="font-bold text-2xl">Free Hosting Services for devs </h1>
      <br/>

      <div className='intro-container'>
        <strong className='intro'>Welcome to Free Hosting Services for Devs!!!!!!
          Here you will find hosting services without any cost. 
          Whether you&apos;re a seasoned coder or just starting out, our platform provides reliable, secure, and free hosting services. 
          Elevate your creations with our £0 hosting services today!</strong>
      </div>

      <Link className='button-container' href='/about'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          About
        </button>
      </Link>
      
      <Footer />

    </div>
  )
}
