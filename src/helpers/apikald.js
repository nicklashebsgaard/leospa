// AXIOS
import axios from "axios";

// KALD TIL MONGODB API 

const api ={
    baseUrl: 'http://localhost:5029/',
}

// about

export const hentAbout = () =>{

    // http://localhost:5029/about/

    let endpoint ="about/";

    let response = axios.get( api.baseUrl + endpoint )

    .then( res => {
        
        /* console.log(res); */
        {return res.data}
    })
    .catch( fejl => {

        console.log( "FEJL: ", fejl );

        return null;

    })

    return response;

};


// Hero

export const hentHero = () =>{

    // http://localhost:5029/hero/

    let endpoint ="hero/";

    let response = axios.get( api.baseUrl + endpoint )

    .then( res => {
        
        /* console.log(res); */
        {return res.data}
    })
    .catch( fejl => {

        console.log( "FEJL: ", fejl );

        return null;

    })

    return response;

};

// Recommendation

export const hentRecommendation = () =>{

    // http://localhost:5029/recommendation/

    let endpoint ="recommendation/";

    let response = axios.get( api.baseUrl + endpoint )

    .then( res => {
        
        /* console.log(res); */
        {return res.data}
    })
    .catch( fejl => {

        console.log( "FEJL: ", fejl );

        return null;

    })

    return response;

};

// Team

export const hentTeam = () =>{

    // http://localhost:5029/team/

    let endpoint ="team/";

    let response = axios.get( api.baseUrl + endpoint )

    .then( res => {
        
        /* console.log(res); */
        {return res.data}
    })
    .catch( fejl => {

        console.log( "FEJL: ", fejl );

        return null;

    })

    return response;

};

// Treatment

export const hentTreatment = () =>{

    // http://localhost:5029/treatment/

    let endpoint ="treatment/";

    let response = axios.get( api.baseUrl + endpoint )

    .then( res => {
        
        /* console.log(res); */
        {return res.data}
    })
    .catch( fejl => {

        console.log( "FEJL: ", fejl );

        return null;

    })

    return response;

};