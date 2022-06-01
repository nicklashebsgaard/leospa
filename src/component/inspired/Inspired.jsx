// SCSS
import "./inspired.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// IMAGES
import Rose from "./../../assets/image/china-rose.png";
import Butterfly from "./../../assets/image/butterfly.png";
import Jasmine from "./../../assets/image/jasmine.png";

// HELPERS API
import { hentAbout } from "./../../helpers/apikald";

// PARSER
import parse from 'html-react-parser';

const Inspired = () => {

  // STATE

  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(false);
  const [fejl, setFejl] = useState(false);

  // Opkald til API'et når component er loadet

  useEffect(() => {

    // Kald apiet - og gem data i state + håndter load og fejl

    setLoading(true);

    setTimeout(() => {

      hentAbout()

        .then((data) => {

          if (data) {
            // Det er gået godt = data
            /* console.log(data); */
            setAbout(data); // put data fra api'et i state
            setFejl(false); // nustill en evt. tidligere fejl
          } else {
            // Det gik ikke så gdot = fejl/null
            setAbout(); // nulstill/tøm evt. tidl. data
            setFejl(true);
          }

        })
        .finally(setLoading(false));

    }, 2000); // END of setTimeout

  }, []);

  return (

    <>

      <section id="about">

      {about && (

        <>

          {about.map(
            (item) =>
              item && (
                <div className="inspiredWrapper" key={item._id}>

                  <div className="chinaRose">
                    <img src={Rose} alt="Red Rose" />
                  </div>
                  <div className="Butterfly">
                    <img src={Butterfly} alt="butterfly" />
                  </div>

                  <div className="Jasmine">
                    <img src={Jasmine} alt="Jasmine flower" />
                  </div>

                  <div className="gridContainer">

                    <div className="textContainerTwo">
                      <p>ABOUT OUR SPA CENTER</p>
                      <h2>{item.title}</h2>

                      <p>{ parse (item.content)}</p>

                      <div className="btnReadMore">
                        <button>READ MORE</button>
                      </div>

                    </div>

                  </div>

                </div>

              )
          )}

        </>

      )}

      {/* {loading && 
        <div> Loading ...
          <span className="material-symbols-outlined" >
          autorenew
          </span>
        </div>
        } */}

      {fejl && <p>fejl</p>}

      </section>

    </>

  );

};

export default Inspired;
