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
            <form action="#" autoComplete="on">

                <div className="Name">
                    <input required id="Name" placeholder="NAME" type="text" />
                </div>
                <div className="Email">
                    <input required id="Email" placeholder="EMAIL ADDRESS" type="email" />
                </div>
                <div className="Service">
                    <input required id="Service" placeholder="SELECT SERVICE" type="text" />
                </div>
                <div className="Phone">
                    <input required id="Phone" placeholder="PHONE NUMER" type="tel" />
                </div>
                <div className="Month">
                    <input required id="Month" type="month" />
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
        </div>

        

    </div>

  );

};

export default EmailForm;