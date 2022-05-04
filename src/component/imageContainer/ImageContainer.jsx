// SCSS 
import "./imagecontainer.scss";

//IMAGE FOR IMAGECONTAINER
import Four from "./../../assets/image/extra_procedures_etc/4.jpg";
import Five from "./../../assets/image/extra_procedures_etc/5.jpg";
import Six from "./../../assets/image/extra_procedures_etc/6.jpg";
import Seven from "./../../assets/image/extra_procedures_etc/7.jpg";


const ImageContainer = () => {

  return (

    <div className="imageContainer">
      <img className="Four" src={Four} alt="Massage" loading="lazy" />
      <img className="Five" src={Five} alt="Hot stone massage" loading="lazy" />
      <img className="Six" src={Six} alt="Waxing" loading="lazy" />
      <img className="Seven" src={Seven} alt="Relax" loading="lazy" />
    </div>

  );

};

export default ImageContainer;
