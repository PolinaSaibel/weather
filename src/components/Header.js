import React, { Component, useState } from "react";
import "../styles/header.css";



function Header(props) { 
    const city = props.city;

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
                <input type="text" className="text-field-input"  id="i-1" placeholder="Введите город"></input>
                    
                <select className="town" id="s1">
                    <option value="" >Или выберите город из списка:</option>
                    <option value="moscow" >Москва</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                    <option value="Екатеринбург">Екатеринбург</option>
                    <option value="тюмень" >Тюмень</option>
                    
                </select>
                <button onClick={props.click1} className="button-1" id="btn">поиск</button>


                </div>

            </div>
            
        </div>
    )
}


export default Header;




