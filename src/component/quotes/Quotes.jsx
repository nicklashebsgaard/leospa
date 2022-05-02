// SCSS 
import "./quotes.scss";

// IMAGES
import QuoteImage from "./../../assets/image/quote.png";
import PersonImage from "./../../assets/image/customers/client-1.png";

const Quotes = () => {

  return (

    <div className="quotesWrapper">
        
        <div className="imgQuotes">
            <img src={QuoteImage} alt="Quotes" />
        </div>

        <div className="textContainer">
            <p>First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass</p>
            <p>life blessed you meat shall you winged under from their there he That you're one called gather make much red</p>
            <p>wherein set fourth green bearing fifth replenish given she had</p>
        </div>

        <div className="imageOfPerson">
            <img src={PersonImage} alt="Girl" />
        </div>

        <div className="personName">
            <p><span>Jack Marsh,</span> Executive</p>
        </div>
    </div>

  );

};

export default Quotes;