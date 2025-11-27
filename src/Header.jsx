import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import SearchBar from './SearchBar'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='top'>
      <div id='top-left'>
        <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="not found" />
        <h1>Sales World</h1>
      </div>

      <div id='top-center'>
        <SearchBar />
      </div>

      <div className='menu-icon' onClick={toggleMenu}>
        <img src={isMenuOpen ? "https://cdn-icons-png.flaticon.com/128/2734/2734822.png" : "https://cdn-icons-png.flaticon.com/128/1828/1828859.png"} alt="menu" />
      </div>

      <div id='top-right' className={isMenuOpen ? 'active' : ''}>
        <Link className='link' to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link className='link' to='/cart' onClick={() => setIsMenuOpen(false)}>Carts</Link>
        <Link
          className='link'
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            const footer = document.getElementById('footer');
            if (footer) {
              footer.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          to="#"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
