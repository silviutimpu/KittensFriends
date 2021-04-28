import React from 'react';
import './card.styles.css'


const Card = (props) => (
  <div className='card-container'>
    <img alt='kittie' src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}></img>
    <h1>{props.monster.name}</h1>
    <h3>{props.monster.address.city}</h3>
  </div>  
);

export default Card;