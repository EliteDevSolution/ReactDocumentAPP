import React from "react";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <img className="header__img" src="" alt=""></img>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="" alt=""></img>
        <p>Usuario</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
