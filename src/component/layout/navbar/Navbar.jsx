// SCSS
import "./navbar.scss";

// IMAGE/ICON
import Logo from "./../../../assets/image/logo.png";

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
            <div className="Logo"><img src={Logo} alt="Leospa Logo" /></div>
            
            <li className="Home">HOME</li>
            <li className="About">ABOUT</li>
            <li className="Feature">FEATURE</li>
            <li className="Service">SERVICE</li>
            <li className="Contact">CONTACT</li>

            <div className="burgerMenuContainer">
              <span id="hamBurger" onClick={() => {setOpenBurgerMenu(true);} } className="material-symbols-outlined">
              menu
            </span>
            {openBurgerMenu && <BurgerModal closeBurgerMenu={setOpenBurgerMenu} />}
            </div>
            
        </ul>
      </nav>

    </div>

  );

};

export default Navbar;
