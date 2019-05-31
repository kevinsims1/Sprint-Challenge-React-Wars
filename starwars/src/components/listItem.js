import React from 'react';
import './StarWars.css';

 const ListItem = props => {
    return (
        <div className="wrapper">
           <div style={{color: "green"}}>{props.char.name}</div> <br/>
           <div>Height: {props.char.height}<br/></div> 
           <div>Mass: {props.char.mass}<br/></div> 
           <div>Hair: {props.char.hair_color}<br/></div> 
           <div>Skin: {props.char.skin_color}<br/></div> 
           <div>Eye: {props.char.eye_color}<br/></div> 
           <div>Birth Year: {props.char.birth_year}<br/></div> 
           <div>Gender: {props.char.gender}</div>
                
        </div>
    );
};

 export default ListItem; 