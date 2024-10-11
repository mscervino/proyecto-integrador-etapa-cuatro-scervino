import { Link } from "react-router-dom";
import './SearchBar.scss'; 
import logo from '/img/logo-integrador-3.webp';  
import carrito from '/img/carrito.webp'; 
import menu from '/img/menu-icon.webp';

const SearchBar = ({onMenuToggle}) => {
  return (
    <div className="search-bar">
      <div className="search-bar__logo-container">
        <img src={logo} alt="Logo Relojes de Colección" />
      </div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
        />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar"
        />
      </form>
      <div className="search-bar__carrito-container">
        <Link to="carrito">
          <img src={carrito} alt="Carrito de compras" />
        </Link>
      </div>
      <div className="menu-toggle">
        <button onClick={onMenuToggle}>
          <img src={menu} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;