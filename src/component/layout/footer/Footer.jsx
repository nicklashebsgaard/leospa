// SCSS
import "./footer.scss";

// IMAGE/ICON
import Logo from "./../../../assets/image/logo.png";
import FacebookLogo from "./../../../assets/image/icons/facebook-logo.png";
import TwitterLogo from "./../../../assets/image/icons/twitter-icon.png";
import VimeoLogo from "./../../../assets/image/icons/vimeo-icon.png";
import InstagramLogo from "./../../../assets/image/icons/instagram-icon.png";

// COMPONENT
import FooterContact from "../../footercontact/FooterContact";

const Footer = () => {

  return (

    <footer>

      <div className="footerWrapper">

        <div className="contentContainer">

          <div className="leospaIconContainer">
            <img src={Logo} alt="Leospa Logo" />
          </div>

          <div className="navigationFooter">
            <nav className="NavFoorer">
                <ul>
                    <li className="homeFooter">HOME</li>
                    <li className="aboutFooter">ABOUT</li>
                    <li className="featureFooter">FEATURE</li>
                    <li className="serviceFooter">SERVICE</li>
                    <li className="contactFooter">CONTACT</li>
                </ul>
            </nav>
          </div>

          <div className="socialIconContainer">

              <div className="facebookContainer">
                  <img src={FacebookLogo} alt="Facebook icon" />|
              </div>
              <div className="twitterContainer">
                  <img src={TwitterLogo} alt="Twitter icon" />|
              </div>
              <div className="vimeoContainer">
                  <img src={VimeoLogo} alt="Vimeo icon" />|
              </div>
              <div className="instagramContainer">
                  <img src={InstagramLogo} alt="Instagram icon" />|
              </div>
              
          </div>

          <div className="copyRights">
              <p> &copy; COPYRIGHT 2019 <span>THEMEIES.</span> ALL RIGHTS RESERVED. </p>
          </div>
            
        </div>
        
      </div>
      <hr />
      <FooterContact />
    </footer>

  );

};

export default Footer;
