// AXIOS
import axios from "axios";

// KALD TIL MONGODB API 

const api ={
    baseUrl: 'http://localhost:5029/',
}

// Treatment

export const hentTreatment = () =>{

    // http://localhost:5029/treatment/

    let endpoint ="treatment/";

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