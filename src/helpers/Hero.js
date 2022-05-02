// AXIOS
import axios from "axios";

// KALD TIL STARWARS API - SWAPI

const api ={
    baseUrl: 'http://localhost:5029/',
}

// Hero

export const hentHero = () =>{

    // http://localhost:5029/hero/

    let endpoint ="hero/";

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