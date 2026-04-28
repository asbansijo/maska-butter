import React, { useState } from 'react'
import './Navbar.css'

const NAV_LINKS = ['Home','Peanut Butter','Nutrition Bars','Gift Boxes','Granola','Combos','Blogs','Contact']

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleCart = () => setCartCount(c => c + 1)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#">Maska<em>butters</em></a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn-cart" onClick={handleCart}>
            🛒 Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
