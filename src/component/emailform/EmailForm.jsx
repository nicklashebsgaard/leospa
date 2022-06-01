// SCSS 
import "./emailform.scss";

// IMAGE
import Appointment from "./../../assets/image/appointment-img.jpg";

// REACT useSTATE useEFFECT
import React, { useState, useEffect } from "react";

// HELPERS API
import { hentTreatment } from "./../../helpers/apikald";


const EmailForm = () => {

    // STATE

  const [treatment, setTreatment] = useState();
  const [loading, setLoading] = useState(false);
  const [fejl, setFejl] = useState(false);

  // Opkald til API'et når component er loadet

  useEffect(() => {

    // Kald apiet - og gem data i state + håndter load og fejl

    setLoading(true);

    setTimeout(() => {

      hentTreatment()

        .then((data) => {
          if (data) {
            // Det er gået godt = data
            /* console.log(data); */
            setTreatment(data); // put data fra api'et i state
            setFejl(false); // nustill en evt. tidligere fejl
          } else {
            // Det gik ikke så gdot = fejl/null
            setTreatment(); // nulstill/tøm evt. tidl. data
            setFejl(true);
          }

        })
        .finally(setLoading(false));

    }, 2000); // END of setTimeout

  }, []); // END of useEffect

  return (

    <div className="formWrapper">

        <div className="imageContainerEmail">
            <img src={Appointment} alt="Appointment" loading="lazy" />
        </div>

      
        {treatment && <div className="formContainer">
            <form action="#" autoComplete="on">

                <div className="Name">
                    <input required id="Name" placeholder="NAME" type="text" />
                </div>
                <div className="Email">
                    <input required id="Email" placeholder="EMAIL ADDRESS" type="email" />
                </div>
                <div className="Service">
                    <select defaultValue={"SELECT SERVICE"} id="Service">
                        <option disabled>SELECT SERVICE</option >
                            {
                                treatment.map(item => (
                                    <option key={item._id} value={item._id}>
                                      {item.title}  
                                    </option>
                                ))
                            }
                        
                    </select>
                </div>
                <div className="Phone">
                    <input required id="Phone" placeholder="PHONE NUMER" type="tel" />
                </div>
                <div className="Month">
                    <input required id="Month" type="date" />
                </div>
                <div className="Date">
                    <input required id="Date" type="time" />
                </div>

                <div className="notes">
                    <textarea className="textNotes" placeholder="YOUR NOTES" name="text" cols="30"></textarea>
                </div>

                <div className="btnAppointment">
                    <button>MAKE AN APPOINTMENT</button>
                </div>
                
            </form>
        </div>}

        {/* {loading && 
        <div> Loading ...
          <span className="material-symbols-outlined" >
          autorenew
          </span>
        </div>
        } */}
        
      {fejl && <p>fejl</p> }      
       
    </div>

  );

};

export default EmailForm;