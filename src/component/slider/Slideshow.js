// SCSS 
import "./slideshow.scss";

// REACT / useState and useEffect
import React, { useState, useEffect } from "react";

// HELPERS API
import { hentRecommendation } from "./../../helpers/apikald";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 3000;

const Slideshow = () => {

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


  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (

    <>

    <section id="slider">
    
      <div className="slideshow">

        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>

      </div>
      
    </section>

    </>

  );

};

export default Slideshow;