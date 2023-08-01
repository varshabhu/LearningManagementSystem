 import React from 'react';
 import {Link} from 'react-router-dom';
 import './Product.css';

 export default function Product(props){
 
    return(
      <div className="show">
        <img  className="prod" src={props.url}alt=""/>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <Link to="/EnrollmentForm"><button type="submit">Enroll</button></Link>
      </div>

    );
 }
