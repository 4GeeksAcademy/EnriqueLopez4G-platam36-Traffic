import React, {useState } from "react";
import '../../styles/TrafficLight.css';
import Light from "./Light";

const TrafficLight =( {order})=> {
    const [selectedColor, setSelectedColor] =useState(null);
    
    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return order ? (
        
    <div className="container semaforo">
        <Light color={"red"} selected = {selectedColor==='red'} handleClick = {handleColorClick}/>
        <Light color={"yellow"} selected = {selectedColor ==='yellow'} handleClick = {handleColorClick}/>
        <Light color={"green"} selected = {selectedColor ==='green'} handleClick = {handleColorClick}/>
    </div>
    )
    :
    (
        
        <div className="container semaforo">
            <Light color={"green"} selected = {selectedColor==='green'} handleClick = {handleColorClick}/>
            <Light color={"red"} selected = {selectedColor ==='red'} handleClick = {handleColorClick}/>
            <Light color={"yellow"} selected = {selectedColor ==='yellow'} handleClick = {handleColorClick}/>
        </div>
        )
}


export default TrafficLight;