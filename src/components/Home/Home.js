import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
// import {Card, Button} from 'react-bootstrap'
import './Home.css';


const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = "https://restcountries.eu/rest/v2/all";
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>CountryPedia:</h1>
            <div id="countries">
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Home;