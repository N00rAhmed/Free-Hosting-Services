import Navbar from '@/app/navbar/page';
import '../resources/resources.css';
import data from '../data.json';

export default async function page() {

  return (
    <div>
      <Navbar/>

      <h1 className="text-lg font-semibold">Free Hosting Services</h1>

      <div className='resource-container'>
        <p className='info'>This page will contain all of the free hosting resources as well as information about them and maybe also how to use certain resources. 
          There will be free Client side hosting services as well as free server side + database hosting services.</p>
      </div>
      <div className='resource-info'>
        
        <ul>
            {/* <h3>make sure to check these sites work and are free </h3> */}
            {data.map((item, index) => (
            <li className="transition duration-500 hover:scale-105" key={index}>
              <a href={item.link} target="_blank"><strong>{item.title}</strong></a>
              <p>{item.content}</p>

              {/* <strong style={{ color: item.title === 'My Title' ? 'red' : 'inherit' }}>
                  {item.title}
                </strong> */}

          </li>
          ))}

        </ul>

      </div>


    </div>
  )
}
