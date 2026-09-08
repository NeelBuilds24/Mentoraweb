import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Mentora AI home">
        <span className="brand-mark" aria-hidden="true">m</span>
        <span>mentora<span className="brand-dot">.</span>ai</span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="sr-only">Toggle navigation</span>
        <span aria-hidden="true">{menuOpen ? 'close' : 'menu'}</span>
      </button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <a href="#method" onClick={closeMenu}>The method</a>
        <a href="#missions" onClick={closeMenu}>Missions</a>
        <a href="#about" onClick={closeMenu}>Why Mentora</a>
        <a className="nav-cta" href="#join" onClick={closeMenu}>Join the early list <span aria-hidden="true">-&gt;</span></a>
      </div>
    </nav>
  )
}

export default Navbar
