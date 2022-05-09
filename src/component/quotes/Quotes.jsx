// SCSS
import "./quotes.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// Carousel - NPM https://www.npmjs.com/package/nuka-carousel
import Carousel from 'nuka-carousel';

// IMAGES
import QuoteImage from "./../../assets/image/quote.png";
import PersonImage from "./../../assets/image/customers/client-1.png";

// HELPERS API
import { hentRecommendation } from "./../../helpers/Recommendation";

const Quotes = () => {

    const antal = 3;

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
            console.log(data);
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

    <>

      <section>
        <Carousel >
          {recommendation &&
            recommendation.slice(0, antal).map(
              (item) =>
                item && (

                  <div className="quotesWrapper">

                    <div className="imgQuotes">
                      <img src={QuoteImage} 
                      alt="Quotes"
                      loading="lazy" />
                    </div>

                    <div className="textContainer">
                      <p>{item.content}</p>
                    </div>

                    <div className="imageOfPerson">
                      <img 
                      src={ require( "./../../assets/image/customers/" + item.image)} 
                      alt="Girl" 
                      loading="lazy" />
                    </div>

                    <div className="personName">
                      <p>
                        <span>{item.name},</span> {item.title}
                      </p>
                    </div>

                  </div>

                )

            )}

        {fejl && <p>fejl</p>}
        </Carousel>
      </section>

    </>

  );

};

export default Quotes;
