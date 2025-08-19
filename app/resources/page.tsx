"use client";
import Navbar from '@/app/navbar/page';
import '../resources/resources.css';
import data from '../data.json';
import Footer from '../footer/page';
import ArticleIcon from '@mui/icons-material/Article';
import { useState, useEffect } from 'react';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technologies.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-gray-100">
      <Navbar />

      <main className="flex-grow px-4 sm:px-8 md:px-16 py-10">
        <h1 className="font-bold text-4xl text-center mb-6 text-cyan-400">
          Free Hosting Resources
        </h1>

        <div className="flex items-center justify-center mb-10">
          <input
            className="bg-slate-800 border border-slate-700 shadow-sm 
            text-gray-200 text-base rounded-xl focus:ring-cyan-500 focus:border-cyan-500 
            block w-full sm:w-1/2 p-3 transition duration-200"
            type="text"
            id="search"
            name="search"
            placeholder="🔍 Search for a resource..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredData.map((item, index) => (
            <li
              key={index}
              className="bg-slate-800 shadow-md rounded-2xl p-6 flex flex-col 
              transition-transform transform hover:scale-105 hover:shadow-cyan-500/30"
            >
              <div className="flex items-center justify-between mb-4">
                <a
                  href={item.link}
                  target="_blank"
                  className="text-xl font-bold text-cyan-400 hover:underline"
                >
                  {item.title}
                </a>
                <ArticleIcon className="text-cyan-300" />
              </div>

              <p className="text-gray-300 flex-grow text-justify">
                {item.content}
              </p>

              <p className="mt-4 text-sm font-semibold text-gray-400">
                Languages/Frameworks:{" "}
                <span className="text-gray-200">{item.technologies}</span>
              </p>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
