import React from 'react';

const Country = ({country}) => {

    console.log(country)
    // console.log(country.flags)

    return (
        <div>
            <h3>Name: {country.name.common}</h3>
            {/* optional chaining(?) ba error na show kore null ba undefined show kora */}
            <img src={country?.flags?.png} alt="" />
            <p>This Country {country.independent ? "is Free and Independent" : "is not Free"}</p>
            <p>Total Population: {country.population}</p>

        </div>
    );
};

export default Country;