// SCSS
import "./home.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// IMAGES
import Leaf from "./../../assets/image/leaf.png";
import Spa from "./../../assets/image/spa.png";
import Rose from "./../../assets/image/china-rose.png";
import Butterfly from "./../../assets/image/butterfly.png";
import Jasmine from "./../../assets/image/jasmine.png";

// ICON
import PlayButton from "./../../assets/image/icons/play-icon-red.png";

// COMPONENT
import Navbar from "../../component/layout/navbar/Navbar";

// AXIOS
import Axios from "axios";

// HELPERS
import { hentHero } from "./../../helpers/Hero";

const Home = () => {
  // STATE

  const [hero, setHero] = useState(); // til at rumme data fra API'et
  const [loading, setLoading] = useState(false); // true når vi venter på data fra API'et
  const [fejl, setFejl] = useState(false); // true når vi får fejl-svar fra API'et

  // Opkald til API'et når component er loadet

  useEffect(() => {

     // Kald apiet - og gem data i state + håndter load og fejl

    setLoading(true);

    setTimeout(() => {

      hentHero()

        .then((data) => {

          if (data) {
            // det er gået godt = data
            console.log(data);
            setHero(data);  // put data fra api'et i state
            setFejl(false); // nulstill en evt. tidligere fejl

          } else {
            // det gik ikke så godt = fejl/null
            setHero(); // nulstill/tøm evt. tidl. data
            setFejl(true);
          }

        })
        .finally(setLoading(false));

    }, 2000); // END of setTimeout

  }, []); // END of useEffect

  return (

    <>

      <header>
        
        {hero && (
          <>
            {hero.map(
              (item) =>
                item.show && (

                  <div className="wrapperContainer">

                    <Navbar /> {/* NAVIGATION-BAR */}

                    <div className="leafContainer">
                      <img id="Leaf" src={Leaf} alt="leaf" />
                    </div>

                    <div className="textContainer">
                      <span>
                        <p>{item.title1}</p>
                      </span>

                      <h1>{item.title2}</h1>

                      <p>{item.content}</p>

                      <div className="miniContainer">

                        <div className="btnReserve">
                          <button>RESERVE NOW</button>
                        </div>

                        <div className="btnPlay">
                          <button>
                            <img src={PlayButton} alt="Play Button" />
                          </button>
                        </div>
                        <p>Watch our story </p>
                      </div>

                    </div>

                    <div className="spaContainer">
                      <img id="Spa" src={Spa} alt="spa" />
                    </div>
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
                      <h2>Come and you will be Inspired!</h2>

                      <p>
                        It's the end of summer the sweltering heat makes human sweat in
                        the night and makes the plants and trees wilt even in the
                        moonlit nights.
                      </p>
                      <p>
                        The eastern wind breeze bring an eerie feeling, that the monsoon
                        clouds are soon comming, there is a strange silence in the ears,
                        the sky gets darker and darker.
                      </p>

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

        {loading && 
        <div> loader

        </div>
        }

        {fejl && 
        <p>fejl</p>
        }

       
      </header>

    </>

  );

};

export default Home;
