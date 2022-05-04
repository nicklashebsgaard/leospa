// SCSS
import "./team.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// HELPERS API
import { hentTeam } from "./../../helpers/Team";

// IMAGES
import PersonOne from "./../../assets/image/team/team1.jpg";
import PersonTwo from "./../../assets/image/team/team2.jpg";
import PersonTree from "./../../assets/image/team/team3.jpg";

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
            console.log(data);
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

    <div className="teamWrapper">

        <div className="textContainer">
            <h2>Experienced Team</h2>
            <p>To doesn't appear replenish together called he of mad place won't wherein blessed second every wherein</p>
            <p>where meat kind wherein and martcin.</p>
        </div>

        <div className="cardContainer">
            <div className="teamPerson">
                <div className="imageHandler">
                    <img src={PersonOne} alt="Joseph Austin" loading="lazy" />
                </div>
                
                <div className="textHandler">
                    <h3>Joseph Austin</h3>
                    <p>Thai Message</p>  
                </div>
            
            </div>

            <div className="teamPerson">
                <div className="imageHandler">
                    <img src={PersonTwo} alt="Joseph Austin" loading="lazy" />
                </div>
                
                <div className="textHandler">
                    <h3>Joseph Austin</h3>
                    <p>Thai Message</p>  
                </div>
            
            </div>

            <div className="teamPerson">
                <div className="imageHandler">
                    <img src={PersonTree} alt="Joseph Austin" loading="lazy" />
                </div>
                
                <div className="textHandler">
                    <h3>Joseph Austin</h3>
                    <p>Thai Message</p>  
                </div>
            
            </div>

        </div>

    </div>

  );

};

export default Team;