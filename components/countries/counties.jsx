

// normal funtion
// function Countries(){
//     return(
//         <div>
//         </div>
//     )
// }

import { use } from "react";
import Country from "../Countrys/Country";


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
    console.log(countrius)

    return (
        <div>
            <h1>Traveiling to the World....: {countrius.length} Country</h1>
            {
                countrius.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Counties;

