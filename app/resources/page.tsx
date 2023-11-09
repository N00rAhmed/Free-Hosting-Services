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
      <div className='resource-info'>
        
        <ul>
            {/* <li><b>Services:</b> FreeClientSide</li> */}
              <li>Netlify</li>
              <li>Vercel</li>
              <li>Render.com</li>
              <li>GitHub Pages</li>
              <li>Supabase</li>
              <li>CockroachDB</li>
              <li>MongoDB</li>
              <li>freemysqlhosting.net</li>
              <li>freeasphosting.net</li>
              <li>freesqldatabase.com</li>
              <li>freedb.tech</li>
              <li>surge.sh</li>
              <li>cyclic.sh</li>
              <li>https://fleek.co/hosting/</li>
              <li>https://pages.cloudflare.com</li>
              <li>w3schools.com/spaces/index.php</li>
              <li>firebase</li>
              <li>digitalocean.com</li>
              <li>alwaysdata.com</li>
              <li>https://bohr.io</li>
              <li>https://bubble.io</li>
              <li>https://dappling.network</li>
              <li>awardspace.net</li>
              <li>https://www.drv.tw</li>
              <li>duckdocs.com</li>
              <li>https://freehostingnoads.net</li>
              <li>https://kinsta.com</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

            </ul>

      </div>


    </div>
  )
}
