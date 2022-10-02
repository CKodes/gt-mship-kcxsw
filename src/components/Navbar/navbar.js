import React, { useState } from 'react';
import './navbar.css';
import logoBlack from '../../assets/LogoBlack.svg';
import { FaBars } from 'react-icons/fa';
import NavbarMobile from '../NavbarMobile/navbarMobile';
import { links } from './data';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div
        className='main-style align-center'
        style={{
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          justifyContent: 'space-between',
        }}
      >
        <div className='align-center padLeft'>
          <img src={logoBlack} alt='logo' />
        </div>
        <div className='align-center padRight'>
          <ul className='align-center links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
          <button
            className='align-center nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
      </div>
      {showLinks && <NavbarMobile />}
    </nav>
  );
}

export default Navbar;
