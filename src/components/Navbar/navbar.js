import './navbar.css';
import logoBlack from '../../assets/LogoBlack.svg';
import { FaBars } from 'react-icons/fa';

function Navbar() {
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
        <div className='align-center' style={{ paddingLeft: '1.5rem' }}>
          <img src={logoBlack} alt='logo' />
        </div>
        <button
          className='align-center nav-toggle'
          style={{ paddingRight: '1.5rem' }}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
