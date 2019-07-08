import React from "react";
import PropTypes from "prop-types";
import { NavBar, Baged, Logo } from "./styles";

const Header = ({ name, onClick }) => (
  <NavBar>
    <ul>
      <li>
        <Logo src="assets/images/logo.png" alt="Logo" />
        <h2>Pizzaria Don Juan</h2>
      </li>
      <li>
        <div>
          <h3>{name}</h3>
          <button onClick={onClick}>Sair do app</button>
        </div>
        <Baged>
          <img src="assets/images/sacola.png" alt="Logo" />
        </Baged>
      </li>
    </ul>
  </NavBar>
);

Header.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Header.defaultProps = {
  name: "Administrador"
};

export default Header;
