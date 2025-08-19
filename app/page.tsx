import Navbar from '@/app/navbar/page';
import Link from 'next/link';
import '../app/globals.css';
import Footer from './footer/page';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-gray-100">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-6 sm:px-12 py-16 text-center">
        {/* Hero Title */}
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-cyan-400 mb-6">
          Free Hosting Services for Devs
        </h1>

        {/* Intro Text */}
        <div className="bg-slate-800 shadow-md rounded-2xl p-8 sm:p-12 max-w-3xl transition hover:shadow-cyan-500/30">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Welcome to <span className="font-semibold text-cyan-300">Free Hosting Services for Devs</span>.  
            Here you will find hosting services at <span className="font-bold text-cyan-400">zero cost</span>.  
            Whether you&apos;re a seasoned coder or just starting out, our platform provides reliable, secure,  
            and free hosting services. Elevate your creations with our <span className="font-bold text-cyan-300">£0 hosting solutions</span> today!
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link href="/about">
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-400 hover:to-blue-500 
              text-white font-bold py-3 px-8 rounded-xl shadow-md 
              hover:shadow-cyan-500/40 transition duration-300"
            >
              Learn More
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
