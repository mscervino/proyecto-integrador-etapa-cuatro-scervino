import menuItems from "../constants/menuItems"
import NavItem from "./NavItem"
import './Navbar.scss';

const Navbar = ({isMenuOpen }) => {
  return (
    <nav className={isMenuOpen ? 'nav-bar is-open' : 'nav-bar'}>
    <ul className="nav-bar__nav-list">
      {
        menuItems.map( item => (
          <NavItem item={item} key={item.id} />
        ))
      }
    </ul>
  </nav>
  )
}

export default Navbar