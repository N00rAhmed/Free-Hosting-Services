import Navbar from '@/components/Navbar';
import '../resources/resources.css';

export default function page() {
  return (
    <div>
      <Navbar/>

      <h1>Free Hosting Services</h1>

      <div className='resource-container'>
        <p className='info'>This page will contain all of the free hosting resources as well as information about them and maybe also how to use certain resources. 
          There will be free Client side hosting services as well as free server side hosting services.</p>

      </div>

    </div>
  )
}
