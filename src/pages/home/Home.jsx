// SCSS
import "./home.scss";

// useSTATE useEFFECT
import { useState, useEffect } from "react";

// IMAGES
import Leaf from "./../../assets/image/leaf.png";
import Spa from "./../../assets/image/spa.png";

// PLAY ICON
import PlayButton from "./../../assets/image/icons/play-icon-red.png";

// COMPONENT
import Navbar from "../../component/layout/navbar/Navbar";
import Modal from "./../../component/modal/Modal";

// HELPERS API 
import { hentHero } from "./../../helpers/apikald";

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
            /* console.log(data); */
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

  const handleToggleModal = () => {
    let target = document.querySelector("#modal");
    target.classList.toggle("active");
  }

  return (

    <>

      <header>
        
        {hero && (

          <>

            {hero.map(
              (item) =>
                item.show && (

                  <div className="wrapperContainer" key={item._id}>

                    <Navbar /> {/* NAVIGATION-BAR */}

                    <div className="leafContainer">
                      <img id="Leaf" 
                      src={Leaf} 
                      alt="leaf" 
                      loading="lazy" />
                    </div>

                    <div className="textContainer">
                      <div className="test">
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
                          <button onClick={ handleToggleModal }><img src={PlayButton} alt="Play Button" /></button>
                          <Modal>
                            <iframe 
                            width="80%" 
                            height="80%"
                            src={("https://www.youtube.com/embed/" + item.link + "?autoplay=1")}  
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            >
                            </iframe>
                          </Modal>
                        </div>
                           
                        <p>Watch our story </p>

                      </div>
                      </div>
                    </div>

                    <div className="spaContainer">
                      <img id="Spa" 
                      src={Spa} 
                      alt="spa" 
                      loading="lazy" />
                    </div>
                    
                  </div>
                )
            )}

          </>

        )}

        {loading && 
        <div> Loading ...
          <span className="material-symbols-outlined" >
          autorenew
          </span>
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
