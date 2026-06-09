import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/industry-4-0', label: 'Industry 4.0' },
  { to: '/process-automation', label: 'Process Automation' },
  { to: '/mes-integration', label: 'MES Integration' },
  { to: '/upgrade-equipment', label: 'Upgrade Equipment' },
  { to: '/robots', label: 'Robots' },
  { to: '/consultations', label: 'Consultations' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isHero = true
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`navbar${isHero ? ' navbar--hero' : ''}`}>
      <div className="navbar-top">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img src="/symbiotech.png" alt="SymbioTech" className="navbar-logo" />
        </NavLink>
        <div className="navbar-contact">
          <a href="mailto:sales@symbiotechusa.com">
            <img src="/mail.svg" alt="" />
            sales@symbiotechusa.com
          </a>
          <a href="tel:+19158735665">
            <img src="/phone.svg" alt="" />
            +1 915 873 5665
          </a>
        </div>
        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={`navbar-nav${menuOpen ? ' open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}