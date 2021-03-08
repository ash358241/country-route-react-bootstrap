import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { useHistory } from 'react-router';
import './Country.css';

const Country = (props) => {
    // console.log(props.country)
    const {name, capital, flag} = props.country;
    const history = useHistory();
    const handleClick = () =>{
        const url = `/country/${name}`;
        history.push(url);
    }
    return (

        <div className="country">
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
            <Card.Title><h3 style={{color: 'black'}}>{name}</h3></Card.Title>
            <Card.Text>
            <h4>Capital: {capital}</h4>
            </Card.Text>
            <Button variant="primary" onClick={() => handleClick(name)}>ClickForMore</Button>
        </Card.Body>
        </Card>
        </div>

    );
};

export default Country;