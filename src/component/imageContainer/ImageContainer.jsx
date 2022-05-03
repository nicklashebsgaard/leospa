// SCSS 
import "./imagecontainer.scss";

//IMAGE FOR IMAGECONTAINER
import One from "./../../assets/image/extra_procedures_etc/1.jpg";
import Two from "./../../assets/image/extra_procedures_etc/2.jpg";
import Tree from "./../../assets/image/extra_procedures_etc/3.jpg";
import Four from "./../../assets/image/extra_procedures_etc/4.jpg";
import Five from "./../../assets/image/extra_procedures_etc/5.jpg";
import Six from "./../../assets/image/extra_procedures_etc/6.jpg";
import Seven from "./../../assets/image/extra_procedures_etc/7.jpg";


const ImageContainer = () => {

  return (

    <div className="imageContainer">
      <img className="Four" src={Four} alt="behanling" loading="lazy" />
      <img className="Five" src={Five} alt="behanling" loading="lazy" />
      <img className="Six" src={Six} alt="behanling" loading="lazy" />
      <img className="Seven" src={Seven} alt="behanling" loading="lazy" />
    </div>

  );

};

export default ImageContainer;
