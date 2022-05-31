// SCSS
import "./team.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// HELPERS API
import { hentTeam } from "./../../helpers/apikald";

const Team = () => {

  // STATE

  const [team, setTeam] = useState(); // til at rumme data fra API'et
  const [loading, setLoading] = useState(false); // true når vi venter på data fra API'et
  const [fejl, setFejl] = useState(false); // true når vi får fejl-svar fra API'et

  // Opkald til API'et når component er loadet

  useEffect(() => {

    // Kald apiet - og gem data i state + håndter load og fejl

    setLoading(true);

    setTimeout(() => {

      hentTeam()

        .then((data) => {
          if (data) {
            // det er gået godt = data
            /* console.log(data); */
            setTeam(data); // put data fra api'et i state
            setFejl(false); // nulstill en evt. tidligere fejl
          } else {
            // det gik ikke så godt = fejl/null
            setTeam(); // nulstill/tøm evt. tidl. data
            setFejl(true);
          }

        })
        .finally(setLoading(false));

    }, 2000); // END of setTimeout

  }, []); // END of useEffect

  return (

    <>

      <section id="team">

        <>

          <div className="teamWrapper">

            <div className="textContainerTeam">
              <h2>Experienced Team</h2>
              <p>
                To doesn't appear replenish together called he of mad place
                won't wherein blessed second every wherein
              </p>
              <p>where meat kind wherein and martcin.</p>
            </div>

            <div className="cardContainer">

              {team &&
                team.map(
                  (item) =>
                    item && (

                      <div className="teamPerson" key={item._id}>

                        <div className="imageHandler">
                          <img
                            src={ require( "./../../assets/image/team/" + item.image)}
                            alt="Joseph Austin"
                            loading="lazy"
                          />
                        </div>

                        <div className="textHandler">
                          <h3>
                            {item.firstname} {item.lastname}
                          </h3>
                          <p>{item.role}</p>
                        </div>

                      </div>

                    )

                )}

            </div>

          </div>

        </>

        {fejl && <p>fejl</p>}

      </section>

    </>

  );
  
};

export default Team;
