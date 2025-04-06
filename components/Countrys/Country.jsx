import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries}) => {

    // console.log(country)
    // console.log(handleVisitedCountries)
    // console.log(country.flags)

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        // setVisited(true);

        // Toggle kora or double tap er jonno condition er proyog
        // if(visited === true){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // simple way for toggle
        setVisited(!visited)

        // function er vitor onno function call kora
        handleVisitedCountries(country);
        
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            {/* optional chaining(?) ba error na show kore null ba undefined show kora */}
            <img src={country?.flags?.png} alt="" />
            <p>This Country {country.independent ? "is Free and Independent" : "is not Free"}</p>
            <p>Total Population: {country.population}</p>

            <button 
            className={visited ? "btn-visited" : "Not-visited"} 
            onClick={handleVisited}> {
                visited ? "Visited" : "Not Visited"
                }</button>

        </div>
    );
};

export default Country;