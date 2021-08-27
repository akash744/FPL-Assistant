import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

type NavbarProps = {
    navbarLinks: any;   
}

const Navbar = ({ navbarLinks }: NavbarProps) => {

  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <div className="max__width">
        <div className="navbar__logo">
          <span className="navbar__brand">FPL Assistant</span>
        </div>
        {menuClicked ? (
          <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
        ) : (
          <FiMenu
            size={25}
            className={"navbar__menu"}
            onClick={toggleMenuClick}
          />
        )}
        <ul
          className={
            menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
          }
        >
          {navbarLinks.map((item:any, index:any) => {
            return (
              <li className="navbar__item" key={index}>
                <a className="navbar__link" href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
