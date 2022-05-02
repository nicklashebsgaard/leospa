// AXIOS
import axios from "axios";

// KALD TIL STARWARS API - SWAPI

const api ={
    baseUrl: 'http://localhost:5029/',
}

// about

export const hentAbout = () =>{

    // http://localhost:5029/about/

    let endpoint ="about/";

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

}