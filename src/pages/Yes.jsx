/* import React from 'react'

const Yes = () => {

     // STATE

  const [treatment, setTreatment] = useState(); // til at rumme data fra API'et
  const [loading, setLoading] = useState(false); // true når vi venter på data fra API'et
  const [fejl, setFejl] = useState(false); // true når vi får fejl-svar fra API'et

  // Opkald til API'et når component er loadet

  useEffect(() => {

     // Kald apiet - og gem data i state + håndter load og fejl

    setLoading(true);

    setTimeout(() => {

        hentTreatment()

        .then((data) => {

          if (data) {
            // det er gået godt = data
            console.log(data);
            setTreatment(data);  // put data fra api'et i state
            setFejl(false); // nulstill en evt. tidligere fejl

          } else {
            // det gik ikke så godt = fejl/null
            setTreatment(); // nulstill/tøm evt. tidl. data
            setFejl(true);
          }

        })
        .finally(setLoading(false));

    }, 2000); // END of setTimeout

  }, []); // END of useEffect

  return (

    <>
        {hero && (

            <>
        
                {hero.map(
                    (item) =>
                    item && (

                        <>

                        </>
                    )
                )}

            </>

        )}

    {loading && 
        <div> Loading ...
            <span class="material-symbols-outlined" >
                autorenew
            </span>
        </div>
    }

    {fejl && 
        <p>fejl</p>
    }
    
    </>

  )

}

export default Yes; */