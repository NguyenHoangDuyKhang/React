import React from "react";
import "./../../styles/Nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
     
      <div className="topnav">
        <NavLink exact to="/" activeClassName="active" >
          Home
        </NavLink>
        <NavLink exact to="/todo" activeClassName="active">
          Todo
        </NavLink>
        <NavLink exact to="/about" activeClassName="active">
          About
        </NavLink>
      </div>
    
    );
  }
}

export default Nav;
