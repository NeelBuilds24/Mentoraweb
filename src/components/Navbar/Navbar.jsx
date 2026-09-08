import { useEffect, useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav shell ${hasScrolled ? 'nav-scrolled' : ''}`} aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Mentora AI home">
        <span className="brand-mark" aria-hidden="true">m</span>
        <span>mentora<span className="brand-dot">.</span>ai</span>
      </a>
      <button className="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="sr-only">Toggle navigation</span>
        <span aria-hidden="true">{menuOpen ? 'close' : 'menu'}</span>
      </button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
        <a href="#problem" onClick={closeMenu}>Why Mentora</a>
        <a href="#solution" onClick={closeMenu}>How It Works</a>
        <a href="#tools" onClick={closeMenu}>AI Tools</a>
        <a href="#missions" onClick={closeMenu}>Missions</a>
        <a href="#about" onClick={closeMenu}>Product</a>
        <a className="nav-cta" href="#join" onClick={closeMenu}>Join Waitlist <span aria-hidden="true">-&gt;</span></a>
      </div>
    </nav>
  )
}

export default Navbar
