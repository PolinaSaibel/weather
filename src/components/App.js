import React, { Component, useState } from "react";

import "../styles/App.css";
import Header from "./Header";

import Weather_today from "./Weather_today";

import Five_days from "./5days";




function App () {
    const [city, setCity] = useState();
    const click2 = () => {
        let a = document.getElementById('s1').value;
        if (!!a) {
            setCity(document.getElementById('s1').value);
            console.log("selector is work")
        }
        else{
            setCity(document.querySelector(".text-field-input").value);
            console.log("поисковая строка")
        }
    }


    return(
        <React.Fragment>
            <Header click1={click2} city={city}  />
            
            <Weather_today city={city} />
            <Five_days city={city} />
            

        </React.Fragment>
    );
    
}

export default App;