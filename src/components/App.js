import React, { Component, useState } from "react";

import "../styles/App.css";
import Header from "./Header";

import Weather_today from "./Weather_today";
import Weather5 from "./Weather_for_5days";

import Coor from "./coor";


function App () {
    const [city, setCity] = useState();
    const click1 = () => {
        setCity(document.querySelector(".text-field-input").value);
        const cityName = document.querySelector(".text-field-input").value;
      
        console.log("-------",cityName.value)
    }


    return(
        <React.Fragment>
            <Header click1={click1} city={city}  />
            <Weather_today city={city} />
            <Weather5 city={city} />

        </React.Fragment>
    );
    
}

export default App;