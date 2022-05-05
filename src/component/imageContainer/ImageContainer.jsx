// SCSS
import "./imagecontainer.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// HELPERS API
import { hentTreatment } from "./../../helpers/Treatment";

const ImageContainer = () => {

  const antal = 4;

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

  return (

    <>

      <section>

        <div className="imageContainer">

          {treatment &&
            treatment
              .slice(0, antal)
              .map(
                (item) =>
                  item && (
                    <div className="imageFlex">
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

      {/* {loading && (
        <div>
          Loading ...
          <span className="material-symbols-outlined">autorenew</span>
        </div>
      )} */}

      {fejl && <p>fejl</p>}

    </>

  );

};

export default ImageContainer;
