// SCSS
import "./recommendationsite.scss";

// REACT / useState and useEffect
import React, { useState, useEffect } from "react";

// HELPERS API
import { hentRecommendation } from "../../helpers/apikald";

// IMAGES
import QuoteImage from "./../../assets/image/quote.png";
import Logo from "./../../assets/image/logo.png";

const RecommendationSite = () => {

  // STATE

  const [recommendation, setRecommendation] = useState(); // til at rumme data fra API'et
  const [loading, setLoading] = useState(false); // true når vi venter på data fra API'et
  const [fejl, setFejl] = useState(false); // true når vi får fejl-svar fra API'et

  // Opkald til API'et når component er loadet

  useEffect(() => {

    // Kald apiet - og gem data i state + håndter load og fejl

    setLoading(true);

    setTimeout(() => {

      hentRecommendation()
        .then((data) => {
          if (data) {
            // det er gået godt = data
            /* console.log(data); */
            setRecommendation(data); // put data fra api'et i state
            setFejl(false); // nulstill en evt. tidligere fejl
          } else {
            // det gik ikke så godt = fejl/null
            setRecommendation(); // nulstill/tøm evt. tidl. data
            setFejl(true);
          }
        })
        .finally(setLoading(false));

    }, 2000); // END of setTimeout

  }, []); // END of useEffect

  return (

    <section id="recommendationSite">

        <div className="iconRecommendation">
            <a href="#home"><img src={Logo} 
            alt="Logo" 
            loading="lazy" /></a>
        </div>

        <div className="imgQuotes">
            <img src={QuoteImage} 
            alt="Quotes" 
            loading="lazy" />
          <div className="textContainerTop">
            <h1>Recommendation</h1>
            </div>
        </div>

      {recommendation &&
        recommendation.slice(0, 4).map(
          (item) =>
            item && (

              <div className="recommendationContainer" key={item._id}>
                <div className="imageOfPerson">
                  <img
                    src={require("./../../assets/image/customers/" +
                      item.image)}
                    alt="Girl"
                    loading="lazy"
                  />
                </div>

                <div className="personName">
                  <h2>
                    <span>{item.name}</span> 
                  </h2>
                  <h2>
                      <span>{item.title}</span>
                  </h2>
                </div>

                <div className="textContainerQ">
                  <p>{item.content}</p>
                </div>

              </div>

            )
        )}

      {loading && (
        <div>
          Loading ...
          <span className="material-symbols-outlined">autorenew</span>
        </div>
      )}

      {fejl && <p>fejl</p>}

    </section>

  );

};

export default RecommendationSite;
