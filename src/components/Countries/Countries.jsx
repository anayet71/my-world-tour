import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] =useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        console.log('add this to your visited country')
        console.log(country)
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;


/***
 * 1. declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. Display data on the component
 *  */ 