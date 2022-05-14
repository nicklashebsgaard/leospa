// SCSS
import "./imagecontainer.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// HELPERS API
import { hentTreatment } from "./../../helpers/apikald";

const ImageContainer = () => {

  // STATE

  const [treatment, setTreatment] = useState();
  const [loading, setLoading] = useState(false);
  const [fejl, setFejl] = useState(false);

  // Opkald til API'et når component er loadet

  useEffect(() => {

    // Kald apiet - og gem data i state + håndter load og fejl

    setLoading(true);

    setTimeout(() => {

      hentTreatment()

        .then((data) => {
          if (data) {
            // Det er gået godt = data
            console.log(data);
            setTreatment(data); // put data fra api'et i state
            setFejl(false); // nustill en evt. tidligere fejl
          } else {
            // Det gik ikke så gdot = fejl/null
            setTreatment(); // nulstill/tøm evt. tidl. data
            setFejl(true);
          }

        })
        .finally(setLoading(false));

    }, 2000); // END of setTimeout

  }, []); // END of useEffect

 /*  var imgArr = [

    "./../../assets/image/extra_procedures_etc/CelluliteReduction.jpg", 
    "./../../assets/image/extra_procedures_etc/facial.jpg",
    "./../../assets/image/extra_procedures_etc/hydrating-mani-pedi.jpg",
    "./../../assets/image/extra_procedures_etc/massage.jpg",
    "./../../assets/image/extra_procedures_etc/oxygen-facial.jpg",
    "./../../assets/image/extra_procedures_etc/spa-massage.jpg",
    "./../../assets/image/extra_procedures_etc/waxing2.jpg",

]

function displayImg(){
  var num = Math.floor(Math.random() * (imgArr.length));
  document.canvas.src="img/"+imgArr[num];
}

<input type="button" onClick="displayImg()" value="Display Random Image">
<img src="img/dog4.jpg" name="canvas" style="width:200px"/>

 */

  return (

    <>

      <section>
    
        <div className="imageContainer">

          {treatment &&
            treatment
              .slice(0, 4)
              .map(
                (item) =>
                  item && (
                    <div className="imageFlex" key={item._id}>
                    <img
                      src={require("./../../assets/image/extra_procedures_etc/" + item.image)}
                      alt="Massage"
                      loading="lazy"
                    />
                    </div>
                  )

              )}

        </div>

      </section>

      {fejl && <p>fejl</p>}

    </>

  );

};

export default ImageContainer;
