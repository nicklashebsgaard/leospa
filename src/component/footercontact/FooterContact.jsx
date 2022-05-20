// SCSS 
import "./footercontact.scss";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// Images 
import ChinaRose from "./../../assets/image/china-rose.png";
import Jasmine from "./../../assets/image/jasmine.png";

// HELPERS API 
import { hentFooter } from "../../helpers/apikald";

const FooterContact = () => {

    // STATE

  const [footerInfo, setFooterInfo] = useState(); // til at rumme data fra API'et
  const [loading, setLoading] = useState(false); // true når vi venter på data fra API'et
  const [fejl, setFejl] = useState(false); // true når vi får fejl-svar fra API'et

  // Opkald til API'et når component er loadet

  useEffect(() => {

     // Kald apiet - og gem data i state + håndter load og fejl

    setLoading(true);

    setTimeout(() => {

      hentFooter()

        .then((data) => {

          if (data) {
            // det er gået godt = data
            /* console.log(data); */
            setFooterInfo(data);  // put data fra api'et i state
            setFejl(false); // nulstill en evt. tidligere fejl

          } else {
            // det gik ikke så godt = fejl/null
            setFooterInfo(); // nulstill/tøm evt. tidl. data
            setFejl(true);
          }

        })
        .finally(setLoading(false));

    }, 2000); // END of setTimeout

  }, []); // END of useEffect

  return (

    <>
        {footerInfo && (
            <div className="infoContainer">

                <div className="footerZip">

                    <div className="redRose">
                        <img src={ChinaRose} 
                        loading="lazy" 
                        alt="China red rose" />
                    </div>

                    <div className="gridBox">
                        <div><h5>Address</h5></div>
                        <div><p>{footerInfo.name}</p></div>
                        <div><p>CVR: {footerInfo.cvr}</p></div>
                        <div><p>{footerInfo.address}</p></div>
                        <div><p>{footerInfo.zipncity}</p></div>
                    </div>
                    
                </div>
            
                <div className="footerKontakt">

                    <div className="gridBox2">
                        <div><h5>Contact</h5></div>
                        <div><p> Tlf: {footerInfo.phone}</p></div>
                        <div><p>Email: {footerInfo.email}</p></div>
                        <div><p>{footerInfo.openinghours}</p></div>
                    </div>
                    
                    <div className="jasmineFlower">
                        <img src={Jasmine} 
                        loading="lazy" 
                        alt="Jasmine flower" />
                    </div>
                    
                </div>
            
            </div>
        )}

    </>

  );

};

export default FooterContact;