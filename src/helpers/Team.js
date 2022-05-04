// AXIOS
import axios from "axios";

// KALD TIL MONGODB API 

const api ={
    baseUrl: 'http://localhost:5029/',
}

// Team

export const hentTeam = () =>{

    // http://localhost:5029/team/

    let endpoint ="team/";

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