

// normal funtion
// function Countries(){
//     return(
//         <div>
//         </div>
//     )
// }

import { use, useState } from "react";
import Country from "../Countrys/Country";
import './counties.css'
import { ESModulesEvaluator } from "vite/module-runner";


// Arrow function
// const Countrias = () =>{
//     return(
//         <div>

//         </div>
//     )
// }

// shortcurt with rsc



const Counties = ({countriesPromise}) => {
    
    const countrius = use(countriesPromise);
    // console.log(countrius)

    // visited country's event handler
    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        // console.log('country visited clicked to be added', country);

        // traveled so far er hisab er jonno spread operator(...Name) er use
        const traveledSoFar = [...visitedCountries, country];
        // console.log(traveledSoFar)
        setVisitedCountries(traveledSoFar);

    }

    
        // visited Flags event handler
        const [visitedFlags, setVisitedFlags] = useState([])

        const handleVisitedFlags = (flags) => {
            // console.log('visited flag is added', flags)
            const newVisitedFlags = [...visitedFlags, flags];
            setVisitedFlags(newVisitedFlags);
        }

    return (
        <div>
            <h1>Traveiling to the World....: {countrius.length} Country</h1>
            <h3>Traveled so far: {visitedCountries.length} </h3>
            <div className="visited-flags-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className="counties">
            {
                countrius.map(country => <Country 
                    key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Counties;

