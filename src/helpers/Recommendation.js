// AXIOS
import axios from "axios";

// KALD TIL MONGODB API 

const api ={
    baseUrl: 'http://localhost:5029/',
}

// Recommendation

export const hentRecommendation = () =>{

    // http://localhost:5029/recommendation/

    let endpoint ="recommendation/";

    let response = axios.get( api.baseUrl + endpoint )

    .then( res => {
        
        console.log(res);
        {return res.data}
    })
    .catch( fejl => {

        console.log( "FEJL: ", fejl );

        return null;

    })

    return response;

};