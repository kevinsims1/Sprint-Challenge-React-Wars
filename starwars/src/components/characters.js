import React from "react"
import ListItem from "./listItem"

function Characters(props) {
    return (
      <div className="App">
         {props.chars.map((char, index) => {
                return <ListItem 
                    char ={char}
                    key={index}
                    showCurrentChar={props.showCurrentChar} />
            })}
        
      </div>
    );
  }

  export default Characters