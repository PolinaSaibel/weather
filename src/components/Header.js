import React, { Component, useState } from "react";
import "../styles/header.css";


function Header(props) {
    let buttonName = "Button";
    let [count, setNewCount] = useState(0);
    const hendleClick = () => {
        setNewCount(count + 1);
    }


    return(
        <div className="container">
            <div className="i">
                <header>This is Header for React app!
                    <button className="some-btn"  onClick={hendleClick}>{buttonName}, {count} click</button>
                </header>
                <h1 className="h1">Прогноз погоды</h1>
                <div className="text-field">
                    {/* <label className="text-feldd-label"></label> */}
                    <input type="text" className="text-field-input"  id="i-1" placeholder="Введите город"></input>
                    <button onClick={props.click1} className="button-1" id="btn">push</button>
                    <p>{props.city}</p>
                </div>
            </div>
            
        </div>
    )
}


export default Header;




