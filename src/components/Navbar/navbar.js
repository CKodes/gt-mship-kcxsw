import './navbar.css';
import logoBlack from '../../assets/LogoBlack.svg';

function Navbar() {
  return (
    <nav>
      <img className='logo-img' src={logoBlack} alt='logo' />

      <div>ICON</div>
    </nav>
  );
}

export default Navbar;
