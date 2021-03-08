import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Card, ListGroup} from 'react-bootstrap';

const CountryDetail = () => {
    const {name} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])
    
    return (
        <div style={{textAlign: 'center', width: '400px', margin: '0 auto'}}>

            <Card style={{ width: '18rem' }}>
            <Card.Header><h3>{country.name}</h3></Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><h4>Region: {country.region}</h4></ListGroup.Item>
                <ListGroup.Item><h5>Sub-region: {country.subregion}</h5></ListGroup.Item>
                <ListGroup.Item><h5>Population: {country.population}</h5></ListGroup.Item>
                <ListGroup.Item><h5>Timezone: {country.timezones}</h5></ListGroup.Item>
                <ListGroup.Item><h5>NumericCode: {country.numericCode}</h5></ListGroup.Item>
                <ListGroup.Item><h6>Language: {country.languages && country.languages[0].name}</h6></ListGroup.Item>
                <ListGroup.Item><h6>Currency Code: {country.currencies && country.currencies[0].code}</h6></ListGroup.Item>
            </ListGroup>
            </Card>

        </div>
    );
};

export default CountryDetail;