import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Navbar/>
      <h1>Free Hosting Services for devs </h1>
{/* for tailwind make sure to use single quotoations */}
      {/* <h1 className='text-red-800 bg-blue-900'>
      Hello world!
    </h1> */}

      <div className='intro-container'>
        <p className='intro'>Welcome to Free Hosting Services for Devs!
          Here you will find hosting services without any cost. 
          Whether you're a seasoned coder or just starting out, our platform provides reliable, secure, and free hosting services. 
          Elevate your creations with our £0 hosting services today!</p>
      </div>

      <Link className='button-container' href='/about'><button>About us</button></Link>
      <Link className='button-container' href='/about'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  About
</button></Link>

    </div>
  )
}
