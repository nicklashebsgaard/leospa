// SCSS
import "./navbar.scss";

// IMAGE/ICON
import Logo from "./../../../assets/image/logo.png";

// NavLink
import { NavLink } from 'react-router-dom';

// useState
import { useState } from "react";

// Componten
import BurgerModal from "../../burgerModal/BurgerModal";

export const Navbar = () => {

  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  return (
    
    <div className="navbar">

      <nav>
        <ul className="navWrapper">

            <div className="Logo">
              <NavLink to="/"><img src={Logo} alt="Leospa Logo" /></NavLink>  
            </div>
            
            <li className="Home">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="About">
              <NavLink to="/#about">ABOUT</NavLink>  
            </li>
            <li className="Feature">
              <NavLink to="/#features">FEATURE</NavLink>  
            </li>
            <li className="Service">
              <NavLink to="/#treatment">SERVICE</NavLink>  
            </li>
            <li className="Contact">
              <NavLink to="/#contact">CONTACT</NavLink> 
            </li>

            <div className="burgerMenuContainer">
              <span id="hamBurger" onClick={() => {setOpenBurgerMenu(true);} } className="material-symbols-outlined">
              menu
            </span>
            </div>
            <></>
            {openBurgerMenu && <BurgerModal closeBurgerMenu={setOpenBurgerMenu} />}
            
        </ul>
      </nav>

    </div>

  );

};

export default Navbar;
