// SCSS
import "./popularprocedures.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// HELPERS API
import { hentTreatment } from "./../../helpers/Treatment";

// IMAGES
import One from "./../../assets/image/extra_procedures_etc/1.jpg";
import Two from "./../../assets/image/extra_procedures_etc/2.jpg";
import Tree from "./../../assets/image/extra_procedures_etc/3.jpg";

const PopularProcedures = () => {

  const antal = 3;

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

      <div className="wrapperPopular">

        <div className="textContainer">
          <h2>Popular Procedures</h2>
          <p>
            To doesn't appear replenish together called he of mad place won't
            wherein blessed second every wherein
          </p>
          <p>where meat kind wherein and martcin.</p>
        </div>

        <div className="cardContainer">
          <>
            {treatment &&
              treatment.slice(0, antal).map(
                (item) =>
                  item && (

                    <div className="popularCard">

                      <div className="imageHandler">
                        <img src={One} alt="Masseage Therapy" loading="lazy" />
                      </div>

                      <div className="textHandler">
                        <h3>{item.title}</h3>
                        <p>{[item.content]}</p>
                      </div>

                      <div className="btnReadMore">
                        <button>
                          <p>READ MORE</p>
                        </button>
                      </div>

                    </div>

                  )

              )}

          </>

        </div>

      </div>

      {loading && (
        <div>
          Loading ...
          <span className="material-symbols-outlined">autorenew</span>
        </div>
      )}

      {fejl && <p>fejl</p>}
      
    </section>
    </>

  );

};

export default PopularProcedures;
