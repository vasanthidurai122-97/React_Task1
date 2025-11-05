import React, { useState } from "react";
import "./css/Home.css"

const Home = () =>{
    const [text,setText] = useState("");

    const handleChange = (e) =>{
        setText(e.target.value);

    }
    return(
        <>
        <div className="container">
            <h1>Live Text Preview</h1>
            <label className="label">TextArea :</label><br></br>
            <textarea
            aria-label="Type text here"
            placeholder="Enter Text"
            value={text}
            onChange={handleChange}/>
            <h3>Preview : </h3>
            <div>
               {text ? ( text.split('\n').map((line, i) => (
                    <p key={i}>
                    {line}
                </p>
            ))
        ) : (
            <p>Nothing to preview</p>
        )}
            </div>
        </div>
    
        
        </>
    );
};
export default Home;