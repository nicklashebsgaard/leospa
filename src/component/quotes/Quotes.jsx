// SCSS
import "./quotes.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// Carousel - NPM https://www.npmjs.com/package/nuka-carousel
import Carousel from 'nuka-carousel';

// IMAGES
import QuoteImage from "./../../assets/image/quote.png";

// HELPERS API
import { hentRecommendation } from "./../../helpers/apikald";

const Quotes = () => {

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

    <>

      <section id="slider">

        <Carousel autoplay="true" wrapAround="true" autoplayInterval="3500" >

          {recommendation &&
            recommendation.slice(0, 3).map(
              (item) =>
                item && (

                  <div className="quotesWrapper" key={item._id}>

                    <div className="imgQuotes">
                      <img src={QuoteImage} 
                      alt="Quotes"
                      loading="lazy" />
                    </div>

                    <div className="textContainerQ">
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

        </Carousel>

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

export default Quotes;
