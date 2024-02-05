import Navbar from '@/app/navbar/page';
import '../about/about.css';

export default function about() {
  return (
    <div>
      <Navbar/>
      
      <h1 className="text-lg font-semibold">About</h1>

      <div className='about-container'>
        <p className='about-info'>The development of this website started in October 2023. The main purpose of this initiative is to provide a platform for 
        sharing knowledge and resources related to hosting web development projects, servers, API's, SQL/NOSQL databases at no cost. 

            </p>
      </div>

    </div>
  )
}
