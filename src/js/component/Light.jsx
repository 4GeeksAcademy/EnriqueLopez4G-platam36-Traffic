import React from "react";
import '../../styles/Light.css';

const Light =( {color,selected, handleClick})=> {
    return (
        <div className={`light ${selected ? 'lightSelected' : ''}`}
            style ={{backgroundColor:color}} 
             onClick={() => handleClick(color)}
        > 
        </div>
    )
}

export default Light;