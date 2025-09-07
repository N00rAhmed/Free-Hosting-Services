import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        {/* https://github.com/N00rAhmed */}
        🚀 Built and designed by <span className="highlight">
          <a className='anchorname' href='https://github.com/N00rAhmed' target='_blank'>Noor Ahmed</a></span>
      </p>
      <p className="footer-copy">&copy; {currentYear} All Rights Reserved</p>
    </footer>
    
  );
}
