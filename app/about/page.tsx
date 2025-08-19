import Navbar from '@/app/navbar/page';
import '../about/about.css';
import Footer from '../footer/page';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-gray-100">
      <Navbar />

      <main className="flex-grow px-6 sm:px-12 md:px-20 py-16 max-w-5xl mx-auto">
        <h1 className="font-bold text-4xl text-center mb-8 text-cyan-400">
          About Us
        </h1>

        <div className="bg-slate-800 shadow-md rounded-2xl p-8 sm:p-12 text-center transition hover:shadow-cyan-500/30">
          <p className="text-lg text-gray-300 leading-relaxed">
            The development of this website started in <span className="font-semibold text-cyan-300">October 2023</span>.  
            The main purpose of this project is to provide a platform for sharing resources related to  
            <span className="font-semibold text-gray-200"> hosting web development projects, servers, APIs, SQL/NoSQL databases </span>  
            — all <span className="font-bold text-cyan-400">at no cost</span>.  
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
