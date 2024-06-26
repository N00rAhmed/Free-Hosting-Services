import Navbar from '@/app/navbar/page';
import '../about/about.css';
import Footer from '../footer/page';

export default function about() {
  return (
    <div>
      <Navbar/>
      
      <h1 className="font-bold text-2xl">About Us</h1>

      <div className='about-container'>
        <strong className='about-info'>The development of this website started in October 2023. The main purpose of this project is to provide a platform for 
        sharing resources related to hosting web development projects, servers, API&apos;s, SQL/NOSQL databases at no cost. 
        </strong>
      </div>
      
      <Footer />
    </div>
  )
}
