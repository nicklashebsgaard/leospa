// SCSS
import "./team.scss";

// IMAGES
import PersonOne from "./../../assets/image/team/team1.jpg";
import PersonTwo from "./../../assets/image/team/team2.jpg";
import PersonTree from "./../../assets/image/team/team3.jpg";

const Team = () => {

  return (

    <div className="teamWrapper">

        <div className="textContainer">
            <h2>Experienced Team</h2>
            <p>To doesn't appear replenish together called he of mad place won't wherein blessed second every wherein</p>
            <p>where meat kind wherein and martcin.</p>
        </div>

        <div className="cardContainer">
            <div className="teamPerson">
                <div className="imageHandler">
                    <img src={PersonOne} alt="Joseph Austin" />
                </div>
                
                <div className="textHandler">
                    <h3>Joseph Austin</h3>
                    <p>Thai Message</p>  
                </div>
            
            </div>

            <div className="teamPerson">
                <div className="imageHandler">
                    <img src={PersonTwo} alt="Joseph Austin" />
                </div>
                
                <div className="textHandler">
                    <h3>Joseph Austin</h3>
                    <p>Thai Message</p>  
                </div>
            
            </div>

            <div className="teamPerson">
                <div className="imageHandler">
                    <img src={PersonTree} alt="Joseph Austin" />
                </div>
                
                <div className="textHandler">
                    <h3>Joseph Austin</h3>
                    <p>Thai Message</p>  
                </div>
            
            </div>

        </div>

    </div>

  );

};

export default Team;