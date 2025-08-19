import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        🚀 Built and designed by <span className="highlight">Noor Ahmed</span>
      </p>
      <p className="footer-copy">&copy; {currentYear} All Rights Reserved</p>
    </footer>
  );
}
