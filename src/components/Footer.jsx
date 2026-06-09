import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/logo.svg" alt="" className="footer-watermark" />
      <div className="footer-logo">
        <img src="/symbiotech.png" alt="SymbioTech" />
      </div>
      <nav className="footer-links">
        <Link to="/about">About Us</Link>
        <Link to="/#contact">Contact Us</Link>
        <Link to="/services">Services/Products</Link>
      </nav>
      <p className="footer-copy">© 2024 SymbioTech LLC. All rights reserved.</p>
    </footer>
  )
}