import React from "react";
import { NavLink } from "react-router-dom";
import './NavItem.scss'; 

const NavItem = ({item}) => {
  return (
    <li className="nav-item"> {}
      <NavLink to={item.ruta} className="nav-item__link"> {}
        {item.nombre}
      </NavLink>
    </li>
  );
};

export default NavItem;
