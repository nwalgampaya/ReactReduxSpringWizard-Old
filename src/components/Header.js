import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h2>Java Sample Approach</h2>
    <h4>Person Mangement Application</h4>
    <div className="header__nav">
      <NavLink to="/" activeClassName="activeNav" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/add" activeClassName="activeNav">
        Add Person
      </NavLink>
    </div>
  </header>
);

export default Header;
