import './navbarMobile.css';
import { links } from '../Navbar/data';

function NavbarMobile() {
  return (
    <div className='nav-mobile'>
      <ul className='main-style'>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavbarMobile;
