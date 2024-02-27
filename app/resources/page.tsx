"use client";
import Navbar from '@/app/navbar/page';
import '../resources/resources.css';
import data from '../data.json';
import Footer from '../footer/page';
import { useState, useEffect } from 'react';


export default function Page() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    const filteredData = () => {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.technologies.toLowerCase().includes(searchTerm.toLowerCase())

      );
      setFilteredData(filtered);
    }
    filteredData();
  }, [searchTerm]);


  return (
    <div>
      <Navbar/>

      <h1 className="font-bold text-3xl">Free Hosting Services</h1>

      <br />

      <div className='resource-info'>
        <div className="flex items-center justify-center pb-10">
          <input
            className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-black
               dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="search"
            name="search"
            placeholder="Search for a resource..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <ul>
            {filteredData.map((item, index) => (
            <li className="transition duration-500 hover:scale-105" key={index}>
              <a className="hover:text-blue-900 font-extrabold text-xl" href={item.link} target="_blank"><strong>{item.title}</strong></a>
              <br />
              <br />
              <p className="text-justify">{item.content}</p>
              <br />
              <p className="font-bold">Languages/Frameworks: {item.technologies}</p>
              <br />

              <button
                type="button" 
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Instructions
              </button>

                {/* create a page which will give instructions on how to use the service. Do this by creating id value in data.json 
                and also create new json file which will render hosting instructions (add id value in the new json file aswell) 
                maybe use material ui icon for clicking to see instruction instead of button. Title will be clickable to redirect to hosting service */}
          </li>
          ))}

        </ul>

      </div>

    <Footer />
    </div>
  )
}
