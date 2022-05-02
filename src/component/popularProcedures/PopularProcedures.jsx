// SCSS 
import "./popularprocedures.scss";

// IMAGES
import One from "./../../assets/image/extra_procedures_etc/1.jpg";
import Two from "./../../assets/image/extra_procedures_etc/2.jpg";
import Tree from "./../../assets/image/extra_procedures_etc/3.jpg";

const PopularProcedures = () => {

  return (

    <div className="wrapperPopular">
        
        <div className="textContainer">
            <h2>Popular Procedures</h2>
            <p>To doesn't appear replenish together called he of mad place won't wherein blessed second every wherein</p>
            <p>where meat kind wherein and martcin.</p>
        </div>
        <div className="cardContainer">
            <div className="popularCard">
                <div className="imageHandler">
                    <img src={One} alt="Masseage Therapy" />
                </div>
                

                <div className="textHandler">
                    <h3>Masseage Therapy</h3>
                    <p>Living winged said you darkness you're
                        divide gathered and bring one seasons
                        face great dr
                        Waters firmament place which</p>  
                </div>
                
                <div className="btnReadMore">
                    <button>
                        <p>READ MORE</p>
                    </button>
                </div>
            </div>

            <div className="popularCard">
                <div className="imageHandler">
                    <img src={Two} alt="Beauty Care" />
                </div>
                

                <div className="textHandler">
                    <h3>Beauty Care</h3>
                    <p>Living winged said you darkness you're
                        divide gathered and bring one seasons
                        face great dr
                        Waters firmament place which</p>  
                </div>
                
                <div className="btnReadMore">
                    <button>
                        <p>READ MORE</p>
                    </button>
                </div>
            </div>

            <div className="popularCard">
                <div className="imageHandler">
                    <img src={Tree} alt="Executive Reflexology" />
                </div>
                

                <div className="textHandler">
                    <h3>Executive Reflexology</h3>
                    <p>Living winged said you darkness you're
                        divide gathered and bring one seasons
                        face great dr
                        Waters firmament place which</p>  
                </div>
                
                <div className="btnReadMore">
                    <button>
                        <p>READ MORE</p>
                    </button>
                </div>
            </div>

        </div>
        
    </div>

  );

};

export default PopularProcedures;