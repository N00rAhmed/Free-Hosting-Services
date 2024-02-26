
import './footer.css';

function page() {

    const currentYear = new Date().getFullYear();


  return (
    <div>
        <br />
        <div className='footer'>
    
            <p className="font-semibold">&copy; {currentYear} All Rights Reserved</p>

        </div>

    </div>
  )
}

export default page