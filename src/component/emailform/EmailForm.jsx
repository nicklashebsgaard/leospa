// SCSS 
import "./emailform.scss";

// IMAGE
import Appointment from "./../../assets/image/appointment-img.jpg";

const EmailForm = () => {

  return (

    <div className="formWrapper">

        <div className="imageContainerEmail">
            <img src={Appointment} alt="Appointment" loading="lazy" />
        </div>

        <div className="formContainer">
            <form action="#">

                <div className="Name">
                    <input  placeholder="NAME" type="text" />
                </div>
                <div className="Email">
                    <input  placeholder="EMAIL ADDRESS" type="emil" />
                </div>
                <div className="Service">
                    <input placeholder="SELECT SERVICE" type="text" />
                </div>
                <div className="Phone">
                    <input placeholder="PHONE NUMER" type="tel" />
                </div>
                <div className="Month">
                    <input type="month" />
                </div>
                <div className="Time">
                    <input type="time" />
                </div>

                <div className="notes">
                    <textarea className="textNotes" placeholder="YOUR NOTES" name="text" cols="30"></textarea>
                </div>

                <div className="btnAppointment">
                    <button>MAKE AN APPOINTMENT</button>
                </div>
                
            </form>
        </div>

        

    </div>

  );

};

export default EmailForm;