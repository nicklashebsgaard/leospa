// SCSS
import "./navbar.scss";

// IMAGE/ICON
import Logo from "./../../../assets/image/logo.png";

export const Navbar = () => {

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
        </ul>
      </nav>

    </div>

  );

};

export default Navbar;
