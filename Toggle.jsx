import React, { useState } from "react";
import "./css/Toggle.css";

const Toggle = () =>{
    const [isOn, setIsOn] = useState(false);

     const handleClick = () =>{
        setIsOn(!isOn);
     }

    return(
        <>
        <div className="togContainer">
            <h1>Toggle Button</h1>
            <button className="btn"
             onClick={handleClick}
             style={{backgroundColor : isOn ? "green" : "red"}}>
                {isOn ? "ON" : "OFF"}

            </button>
            <p>
                The Toggle Button is <strong>{isOn ? "ON" : "OFF"}</strong>
            </p>
        </div>
        </>
    );
};
export default Toggle;